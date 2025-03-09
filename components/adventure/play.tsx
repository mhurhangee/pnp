'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ChevronDown } from 'lucide-react';
import { Adventure } from './adventures';
import { Protagonist } from './protagonists';

export function Play({
    selectedAdventure,
    selectedProtagonist,
}: {
    selectedAdventure: Adventure;
    selectedProtagonist: Protagonist;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [gameHistory, setGameHistory] = useState<(string | { narrative: string; selectedOption: string })[]>([]);
    
    // UI state
    const [displayMode, setDisplayMode] = useState<'narrative' | 'options'>('narrative');
    const [currentNarrative, setCurrentNarrative] = useState(selectedAdventure.initialStoryPrompt);
    const [currentOptions, setCurrentOptions] = useState(selectedAdventure.initialOptions);

    const handleOptionClick = (option: string) => {
        // Start loading state
        setIsLoading(true);
        
        // Create the updated history
        const updatedHistory = [...gameHistory, { narrative: currentNarrative, selectedOption: option }];
        setGameHistory(updatedHistory);
        
        // Make API call
        fetch('/api/play', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                adventure: selectedAdventure,
                protagonist: selectedProtagonist,
                gameHistory: updatedHistory,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            setCurrentNarrative(data.narrative);
            setCurrentOptions(data.options);
            setIsLoading(false);
            setDisplayMode('narrative');
        })
        .catch((err) => {
            console.error(err);
            setIsLoading(false);
            setDisplayMode('narrative');
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-4 min-h-[calc(100vh-100px)] flex flex-col">
            <motion.h1 
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {selectedProtagonist.name}&#39;s Adventure: {selectedAdventure.title}
            </motion.h1>

            <div className="flex-grow flex flex-col justify-center">
                {/* Loading Indicator */}
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div 
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-12"
                        >
                            <Loader2 className="h-12 w-12 animate-spin text-indigo-400 mb-4" />
                            <p className="text-indigo-300 text-lg">
                                {selectedProtagonist.name} is thinking...
                            </p>
                        </motion.div>
                    ) : displayMode === 'narrative' ? (
                        <motion.div
                            key="narrative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 rounded-lg bg-gray-800 shadow-md mb-6"
                        >
                            <p className="mb-8">{currentNarrative}</p>
                            
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className="mx-auto block px-6 py-2 rounded-full bg-indigo-700 hover:bg-indigo-600 shadow-lg flex items-center"
                                onClick={() => setDisplayMode('options')}
                            >
                                <span>Continue</span>
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="options"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-4"
                        >
                            <p className="text-center mb-6 text-indigo-300">
                                What will {selectedProtagonist.name} do next?
                            </p>
                            
                            {currentOptions.map((option, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="w-full p-4 border border-indigo-600 rounded-lg text-left hover:bg-indigo-900 transition-colors shadow-md"
                                    onClick={() => handleOptionClick(option)}
                                    disabled={isLoading}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            {/* Game progress indicator */}
            <div className="mt-8 flex justify-center">
                <div className="flex space-x-2">
                    {Array.from({ length: gameHistory.length + 1 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full ${i === gameHistory.length ? 'bg-indigo-500' : 'bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
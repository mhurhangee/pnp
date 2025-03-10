'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Adventure } from './adventures';
import { Protagonist } from './protagonists';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { EnhancedStrippedDice } from '@/components/design/dice';

export function Play({
    selectedAdventure,
    selectedProtagonist,
}: {
    selectedAdventure: Adventure;
    selectedProtagonist: Protagonist;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [gameHistory, setGameHistory] = useState<{ role: "narrator" | "player", message: string }[]>([
        { role: "narrator", message: selectedAdventure.initialStoryPrompt }
    ]);

    // UI state
    const [displayMode, setDisplayMode] = useState<'narrative' | 'options' | 'updatedAction'>('narrative');
    const [currentNarrative, setCurrentNarrative] = useState(selectedAdventure.initialStoryPrompt);
    const [currentOptions, setCurrentOptions] = useState(selectedAdventure.initialOptions);
    const [currentOutcome, setCurrentOutcome] = useState('');
    const [diceRolling, setDiceRolling] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionSelect = (option: string) => {
        setIsLoading(true);
        setDiceRolling(true);
        setSelectedOption(option);
    }

    const handleDiceRoll = (result: number) => {
        
        const updatedDiceResult = result 

        // Make API call
        fetch('/api/play', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                adventure: selectedAdventure,
                protagonist: selectedProtagonist,
                gameHistory: gameHistory,
                diceResult: updatedDiceResult,
                currentNarrative: currentNarrative,
                selectedOption: selectedOption
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setCurrentOutcome(data.adjustedAction);
                setCurrentNarrative(data.narrative);
                setCurrentOptions(data.options);
                setGameHistory([...gameHistory, { role: "player", message: data.adjustedAction }, { role: "narrator", message: data.narrative }]);
                setSelectedOption('');
                setTimeout(() => {
                    setIsLoading(false);
                    setDiceRolling(false);
                    setDisplayMode('updatedAction');
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
                setSelectedOption('');
                setIsLoading(false);
                setDiceRolling(false);
                setDisplayMode('narrative');
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-4 min-h-[calc(100vh-100px)] flex flex-col">
            <motion.h1
                className="text-2xl font-bold mb-6 text-center pix-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {selectedProtagonist.name}: {selectedAdventure.title}
            </motion.h1>
            <div className="flex-grow flex flex-col justify-center">
                {/* Loading Indicator */}
                <AnimatePresence mode="wait">
                    {isLoading || diceRolling ? (


                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-12"
                        >

                            <EnhancedStrippedDice
                                onRollComplete={(result) => {
                                    handleDiceRoll(result);
                                }}
                                autoHide={false}
                            />
                        </motion.div>
                    ) : displayMode === 'updatedAction' ? (
                        <motion.div
                            key="updatedAction"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className={cn("p-6 border-2 mb-6 relative", `${selectedAdventure.color}`)}
                        >
                            <motion.div className="absolute top-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute top-0 right-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 right-0 w-4 h-4 bg-white"></motion.div>
                            <p className="mb-8">{currentOutcome}</p>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <Button
                                    onClick={() => setDisplayMode('narrative')}
                                    className="mx-auto flex items-center"
                                    size="sm"
                                >
                                    ▼ Continue ▼
                                </Button>
                            </motion.div>
                        </motion.div>
                    ) : displayMode === 'narrative' ? (
                        <motion.div
                            key="narrative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className={cn("p-6 border-2 mb-6 relative", `${selectedAdventure.color}`)}
                        >
                            <motion.div className="absolute top-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute top-0 right-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 right-0 w-4 h-4 bg-white"></motion.div>


                            <p className="mb-8">{currentNarrative}</p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <Button
                                    onClick={() => setDisplayMode('options')}
                                    className="mx-auto flex items-center"
                                    size="sm"
                                >
                                    ▼ Continue ▼
                                </Button>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="options"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className={cn("border-2 relative", `${selectedAdventure.color}`)}
                        >
                            <motion.div className="absolute top-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute top-0 right-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 left-0 w-4 h-4 bg-white"></motion.div>
                            <motion.div className="absolute bottom-0 right-0 w-4 h-4 bg-white"></motion.div>
                            <p className="text-center mb-6">
                                What will {selectedProtagonist.name} do next?
                            </p>

                            <div className="space-y-4 mb-6">
                                {currentOptions.map((option, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-center p-2"
                                    >
                                        <span className="mr-2">
                                            <Button
                                                key={index}
                                                onClick={() => handleOptionSelect(currentOptions[index])}
                                                disabled={isLoading}
                                                size="sm"
                                            >
                                                {index + 1}
                                            </Button></span>
                                        <p className="flex-grow"> {option}</p>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
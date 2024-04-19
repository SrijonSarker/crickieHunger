import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../Card/Card';

const MatchesContainer = ({ cards }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedSubTab, setSelectedSubTab] = useState(0);

    const filterCards = (cards, type, status) => {
        let filtered = cards;
        if (type === 'domestic') {
            filtered = filtered.filter(card => card.type !== 'international');
        } else if (type === 'international') {
            filtered = filtered.filter(card => card.type === 'international');
        }

        if (status === 'live') {
            filtered = filtered.filter(card => card.status === 'ongoing');
        } else if (status === 'recent') {
            filtered = filtered.filter(card => card.status === 'completed');
        } else if (status === 'upcoming') {
            filtered = filtered.filter(card => card.status === 'upcoming');
        }
        return filtered;
    };

    const filteredCards = () => {
        let filtered = cards;
        if (selectedTab === 0) {
            filtered = filterCards(filtered, 'domestic', ['live', 'recent', 'upcoming'][selectedSubTab]);
        } else if (selectedTab === 1) {
            filtered = filterCards(filtered, 'international', ['live', 'recent', 'upcoming'][selectedSubTab]);
        }
        return filtered;
    };

    return (
        <div className='my-16 py-10 px-10 gap-5 mx-24 bg-white rounded-2xl h-[750px]' >
            <h2 className='text-2xl font-semibold pb-5'>Matches</h2>
            <Tabs  selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
                <TabList>
                    <Tab >Domestic</Tab>
                    <Tab >International</Tab>
                </TabList>
                <TabPanel>
                    <Tabs selectedIndex={selectedSubTab} onSelect={index => setSelectedSubTab(index)}>
                    <TabList >
                            <Tab>Live</Tab>
                            <Tab>Recent</Tab>
                            <Tab>Upcoming</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-3 gap-5 ' >
                            {/* <TabList>
                            <Tab>Live</Tab>
                            <Tab>Recent</Tab>
                            <Tab>Upcoming</Tab>
                        </TabList> */}
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=' grid grid-cols-3 gap-5 '>
                            {/* <TabList>
                            <Tab>Live</Tab>
                            <Tab>Recent</Tab>
                            <Tab>Upcoming</Tab>
                        </TabList> */}
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=' grid grid-cols-3 gap-5'>
                            {/* <TabList>
                            <Tab>Live</Tab>
                            <Tab>Recent</Tab>
                            <Tab>Upcoming</Tab>
                        </TabList> */}
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs selectedIndex={selectedSubTab} onSelect={index => setSelectedSubTab(index)}>
                        <TabList>
                            <Tab>Live</Tab>
                            <Tab>Recent</Tab>
                            <Tab>Upcoming</Tab>
                        </TabList>
                        <TabPanel>
                            <div className=' grid grid-cols-3 gap-5 '>
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=' grid grid-cols-3 gap-5 '>
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className=' grid grid-cols-3 gap-5 '>
                                {filteredCards().map(card => (
                                    <Card key={card.id} card={card} />
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MatchesContainer;

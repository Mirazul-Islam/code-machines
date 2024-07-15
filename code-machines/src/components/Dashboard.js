import React from 'react';
import './Dashboard.css';
import {
    Dashboard as DashboardIcon,
    Assignment as AssignmentIcon,
    Book as BookIcon,
    Person as PersonIcon,
    EmojiEvents as EmojiEventsIcon,
    Brightness4 as Brightness4Icon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Notifications as NotificationsIcon,
    ThumbUp as ThumbUpIcon,
    ThumbDown as ThumbDownIcon,
    HourglassEmpty as HourglassEmptyIcon,
    Mail as MailIcon,
    Star as StarIcon
} from '@mui/icons-material';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="logo">
                    <h1>Code Mac</h1>
                </div>
                <ul>
                    <li className="active"><DashboardIcon /> Dashboard</li>
                    <li><AssignmentIcon /> Tests</li>
                    <li><BookIcon /> Courses</li>
                    <li><PersonIcon /> Profile</li>
                    <li><EmojiEventsIcon /> Leaderboard</li>
                    <li><Brightness4Icon /> Dark mode</li>
                    <li><SettingsIcon /> Settings</li>
                    <li><ExitToAppIcon /> Log Out</li>
                </ul>
            </div>
            <div className="main-content">
                <header>
                    <div className="welcome-section">
                        <h2>Welcome Abdullah!</h2>
                        <p>Here is your Profile Dashboard</p>
                    </div>
                    <div className="user-wrapper">
                        <NotificationsIcon className="notification-icon" />
                        <img src="https://via.placeholder.com/30" alt="user" className="user-img" />
                        <div>
                            <h4>Abdullah</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="cards">
                        <div className="card leaderboard">
                            <div className="card-header">
                                <EmojiEventsIcon className="custom-icon" />
                                <h3>Leader Board</h3>
                            </div>
                            <div className="card-body">
                                <div className="leaderboard-entry">
                                    <img src="https://via.placeholder.com/50" alt="John Leboo" />
                                    <div>
                                        <h4>John Leboo</h4>
                                        <small>Neo Programming League _ NPL</small>
                                    </div>
                                    <div className="leaderboard-position">
                                        <span>1</span>
                                        <span role="img" aria-label="gold medal">🥇</span>
                                    </div>
                                </div>
                                <div className="leaderboard-entry">
                                    <img src="https://via.placeholder.com/50" alt="Samuel Kingasunye" />
                                    <div>
                                        <h4>Samuel Kingasunye</h4>
                                        <small>Neo Programming League _ NPL</small>
                                    </div>
                                    <div className="leaderboard-position">
                                        <span>2</span>
                                        <span role="img" aria-label="silver medal">🥈</span>
                                    </div>
                                </div>
                                <div className="leaderboard-entry">
                                    <img src="https://via.placeholder.com/50" alt="Stephen Kerubo" />
                                    <div>
                                        <h4>Stephen Kerubo</h4>
                                        <small>Neo Programming League _ NPL</small>
                                    </div>
                                    <div className="leaderboard-position">
                                        <span>3</span>
                                        <span role="img" aria-label="bronze medal">🥉</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card large-stat">
                            <div className="card-header">
                                <AssignmentIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>32</h3>
                                    <p>Tests Written</p>
                                </div>
                            </div>
                        </div>
                        <div className="card small-stat">
                            <div className="card-header">
                                <MailIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>32</h3>
                                    <p>No of Tests</p>
                                </div>
                            </div>
                        </div>
                        <div className="card small-stat">
                            <div className="card-header">
                                <ThumbUpIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>12</h3>
                                    <p>Passed</p>
                                </div>
                            </div>
                        </div>
                        <div className="card large-stat">
                            <div className="card-header">
                                <DashboardIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>%80</h3>
                                    <p>Overall Average</p>
                                </div>
                            </div>
                        </div>
                        <div className="card small-stat">
                            <div className="card-header">
                                <ThumbDownIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>19</h3>
                                    <p>Failed</p>
                                </div>
                            </div>
                        </div>
                        <div className="card small-stat">
                            <div className="card-header">
                                <StarIcon className="custom-icon" />
                                <div className="stat-info">
                                    <h3>1</h3>
                                    <p>Waiting for result</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

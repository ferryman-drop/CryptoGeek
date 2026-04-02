import './HomePage.css';

const HomePage = () => {
  return (
    <div className="app-shell">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <a href="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="logo-text">
              <span className="logo-delio">Delio</span>
              <span className="logo-life"> Life OS</span>
            </span>
          </a>
        </div>

        <div className="top-bar-center">
          <div className="omnibar-container">
            <input 
              type="text" 
              className="omnibar" 
              placeholder="Запитай Delio або додай щось..."
            />
            <svg className="omnibar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <div className="omnibar-status">
              <span className="ai-dot thinking"></span>
            </div>
          </div>
        </div>

        <div className="top-bar-right">
          <button className="profile-btn" aria-label="Profile">
            <span className="text-body-sm">UK</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <nav className="sidebar-section">
          <div className="sidebar-section-title">Life Dashboard</div>
          <a href="/" className="nav-item nav-item-active">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            <span className="nav-item-label">Home</span>
          </a>
          <a href="/health" className="nav-item">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span className="nav-item-label">Health</span>
          </a>
          <a href="/finance" className="nav-item">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span className="nav-item-label">Finance</span>
          </a>
          <a href="/projects" className="nav-item">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <span className="nav-item-label">Projects</span>
          </a>
          <a href="/relationships" className="nav-item">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span className="nav-item-label">Relationships</span>
          </a>
          <a href="/learning" className="nav-item">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span className="nav-item-label">Learning</span>
          </a>
        </nav>

        <div className="sidebar-divider"></div>

        <nav className="sidebar-section">
          <div className="sidebar-section-title">DelioDev</div>
          <a href="/dev/memory" className="nav-item nav-item-dev">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
            <span className="nav-item-label">Memory</span>
          </a>
          <a href="/dev/actions" className="nav-item nav-item-dev">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
            </svg>
            <span className="nav-item-label">Actions</span>
          </a>
          <a href="/dev/approvals" className="nav-item nav-item-dev">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            <span className="nav-item-label">Approvals</span>
          </a>
          <a href="/dev/debug" className="nav-item nav-item-dev">
            <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span className="nav-item-label">Debug</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-grid">
          
          {/* Hero / Direction Block */}
          <section className="hero-block">
            <div className="hero-content">
              <h1 className="hero-title">
                Фокус на глибокій роботі
              </h1>
              <p className="hero-description">
                Сьогодні ідеальний день для завернення поточних проєктів. 
                Твоя енергія на піку до обіду — використай це для найскладніших задач.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">
                  Почати роботу
                </button>
                <button className="btn btn-secondary">
                  Переглянути план
                </button>
              </div>
            </div>
          </section>

          {/* State Strip */}
          <section className="state-strip">
            <div className="state-metric">
              <div className="state-metric-header">
                <span className="state-metric-label">Energy</span>
                <div className="state-metric-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <span className="state-metric-value">Стабільна</span>
              <span className="state-metric-status">Ранковий пік</span>
            </div>

            <div className="state-metric">
              <div className="state-metric-header">
                <span className="state-metric-label">Focus</span>
                <div className="state-metric-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <span className="state-metric-value">Глибокий</span>
              <span className="state-metric-status">Flow стан</span>
            </div>

            <div className="state-metric">
              <div className="state-metric-header">
                <span className="state-metric-label">Projects</span>
                <div className="state-metric-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot warning"></span>
                </div>
              </div>
              <span className="state-metric-value">12 активних</span>
              <span className="state-metric-status">3 горять</span>
            </div>

            <div className="state-metric">
              <div className="state-metric-header">
                <span className="state-metric-label">Finance</span>
                <div className="state-metric-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <span className="state-metric-value">На треку</span>
              <span className="state-metric-status">+18% до цілі</span>
            </div>
          </section>

          {/* Today Block */}
          <section className="today-block">
            <div className="today-header">
              <h2 className="today-title">Сьогодні</h2>
              <button className="btn btn-ghost">
                Додати задачу
              </button>
            </div>
            <div className="today-list">
              <div className="today-item today-item-primary">
                <svg className="today-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/>
                </svg>
                <div className="today-item-content">
                  <div className="today-item-title">Завершити дизайн-систему Delio</div>
                  <div className="today-item-description">Фіналізація кольорів, типографіки та компонентів</div>
                </div>
              </div>
              <div className="today-item">
                <svg className="today-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <div className="today-item-content">
                  <div className="today-item-title">Огляд фінансового звіту за тиждень</div>
                  <div className="today-item-description">Перевирити категорії витрат</div>
                </div>
              </div>
              <div className="today-item">
                <svg className="today-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <div className="today-item-content">
                  <div className="today-item-title">Дзвінок з командою</div>
                  <div className="today-item-description">Обговорення roadmap на наступний місяць</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Add Block */}
          <section className="quick-add-block">
            <h2 className="quick-add-title">Швидке додавання</h2>
            <p className="quick-add-subtitle">Що відбувається? Delio запам'ятає і структурує.</p>
            
            <div className="quick-add-input-wrapper">
              <div className="omnibar-container">
                <input 
                  type="text" 
                  className="omnibar" 
                  placeholder="Напиши будь-що природною мовою..."
                  style={{ height: '80px', minHeight: '80px', paddingTop: '12px' }}
                />
                <svg className="omnibar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </div>
            </div>

            <div className="quick-add-chips">
              <button className="chip">📝 Fact</button>
              <button className="chip">💡 Idea</button>
              <button className="chip">✓ Task</button>
              <button className="chip">📌 Note</button>
              <button className="chip">👤 Person</button>
            </div>

            <div className="quick-add-actions">
              <button className="btn btn-secondary">Скасувати</button>
              <button className="btn btn-primary">
                Додати запис
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </section>

          {/* Mentor & Life Signals Grid */}
          <div className="dashboard-grid dashboard-grid-2">
            
            {/* Mentor Block */}
            <section className="mentor-block">
              <div className="mentor-header">
                <svg className="mentor-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <h2 className="mentor-title">Delio Mentor</h2>
              </div>

              <div className="mentor-section">
                <div className="mentor-section-label">Що добре</div>
                <div className="mentor-list">
                  <div className="mentor-item mentor-item-good">
                    <svg className="mentor-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Послідовний ранковий ритуал вже 7 днів</span>
                  </div>
                  <div className="mentor-item mentor-item-good">
                    <svg className="mentor-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Витрати в межах бюджету цього тижня</span>
                  </div>
                </div>
              </div>

              <div className="mentor-section">
                <div className="mentor-section-label">Що ризиково</div>
                <div className="mentor-list">
                  <div className="mentor-item mentor-item-risk">
                    <svg className="mentor-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <span>Низька енергія у вечірній час останні 3 дні</span>
                  </div>
                </div>
              </div>

              <div className="mentor-section">
                <div className="mentor-section-label">Що далі</div>
                <div className="mentor-list">
                  <div className="mentor-item mentor-item-next">
                    <svg className="mentor-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span>Оглянути тижневі цілі у п'ятницю</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Life Signals Block */}
            <section className="life-signals-block">
              <div className="life-signals-header">
                <h2 className="life-signals-title">Life Signals</h2>
                <button className="btn btn-ghost btn-sm">Детальніше</button>
              </div>

              <div className="life-signals-grid">
                <div className="signal-item">
                  <span className="signal-label">Rhythm</span>
                  <div className="signal-indicator">
                    <div className="signal-dots">
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                    </div>
                  </div>
                  <span className="signal-value">On track</span>
                </div>

                <div className="signal-item">
                  <span className="signal-label">Recovery</span>
                  <div className="signal-indicator">
                    <div className="signal-dots">
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                    </div>
                  </div>
                  <span className="signal-value">Good</span>
                </div>

                <div className="signal-item">
                  <span className="signal-label">Load</span>
                  <div className="signal-indicator">
                    <div className="signal-dots">
                      <span className="signal-dot active"></span>
                      <span className="signal-dot active"></span>
                      <span className="signal-dot partial"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                      <span className="signal-dot"></span>
                    </div>
                  </div>
                  <span className="signal-value">Balanced</span>
                </div>
              </div>

              <div className="consistency-row">
                <span className="signal-label">Consistency</span>
                <div className="consistency-bar">
                  <div className="consistency-progress">
                    <div className="consistency-fill" style={{ width: '80%' }}></div>
                  </div>
                  <span className="consistency-label">80% · 7 днів</span>
                </div>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;

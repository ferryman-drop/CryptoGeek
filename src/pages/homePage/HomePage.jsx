import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="app-layout">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="top-bar-left">
          <a href="/" className="logo">
            <span className="logo-mark">D</span>
            Delio<span className="logo-dot"></span>
          </a>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link active">Головна</a>
              </li>
              <li className="nav-item">
                <a href="/health" className="nav-link">Здоров'я</a>
              </li>
              <li className="nav-item">
                <a href="/finance" className="nav-link">Фінанси</a>
              </li>
              <li className="nav-item">
                <a href="/projects" className="nav-link">Проєкти</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="top-bar-right">
          <div className="ai-status ready">
            <span className="ai-status-dot"></span>
            <span className="text-tiny">Delio готовий</span>
          </div>
          <div className="profile-avatar">OK</div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-label">Life Dashboard</div>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <a href="/" className="sidebar-link active">
                <span className="sidebar-icon">🏠</span>
                <span>Головна</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/health" className="sidebar-link">
                <span className="sidebar-icon">💚</span>
                <span>Здоров'я</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/finance" className="sidebar-link">
                <span className="sidebar-icon">💰</span>
                <span>Фінанси</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/projects" className="sidebar-link">
                <span className="sidebar-icon">📁</span>
                <span>Проєкти</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/relationships" className="sidebar-link">
                <span className="sidebar-icon">👥</span>
                <span>Відносини</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-section">
          <div className="sidebar-label">System</div>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <a href="/settings" className="sidebar-link">
                <span className="sidebar-icon">⚙️</span>
                <span>Налаштування</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="/deliodev" className="sidebar-link sidebar-delio-dev">
                <span className="sidebar-icon">🛠</span>
                <span>DelioDev</span>
                <span className="sidebar-badge">
                  <span className="badge badge-ai">dev</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero / Direction Block */}
        <section className="hero-block">
          <div className="hero-label">Головний фокус сьогодні</div>
          <h1 className="hero-title">Завершити презентацію для інвесторів</h1>
          <p className="hero-description">
            Це ключова подія тижня. Виділи 2 години на фіналізацію слайдів та підготовку до відповідей на запитання.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg">→ Розпочати роботу</button>
            <button className="btn btn-secondary btn-lg">Показати план</button>
          </div>
        </section>

        {/* State Strip */}
        <section className="state-strip">
          <div className="state-item">
            <div className="state-label">Energy</div>
            <div className="state-indicator">
              <div className="dot-indicator">
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <span className="state-value">72%</span>
            </div>
          </div>
          
          <div className="state-item">
            <div className="state-label">Focus</div>
            <div className="state-indicator">
              <div className="dot-indicator">
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
              <span className="state-value">85%</span>
            </div>
          </div>
          
          <div className="state-item">
            <div className="state-label">Projects</div>
            <div className="state-value">3 active</div>
          </div>
          
          <div className="state-item">
            <div className="state-label">Finance</div>
            <div className="state-value" style={{ color: 'var(--success)' }}>+12% this month</div>
          </div>
        </section>

        {/* Today Block */}
        <section className="today-block">
          <div className="today-header">
            <h2 className="today-title">Сьогодні</h2>
          </div>
          
          <div className="today-main">
            <div className="today-main-label">🎯 Головне</div>
            <h3 className="today-main-title">Презентація для інвесторів</h3>
            <div className="today-main-meta">14:00 • Google Meet</div>
          </div>
          
          <div className="today-secondary">
            <div className="today-secondary-label">📋 Другорядне</div>
            <ul className="today-list">
              <li className="today-item">
                <span className="dot"></span>
                <span>Відповісти на email від команди</span>
              </li>
              <li className="today-item">
                <span className="dot"></span>
                <span>Оновити бюджет проєкту</span>
              </li>
              <li className="today-item">
                <span className="dot"></span>
                <span>Перевірити календар на наступний тиждень</span>
              </li>
            </ul>
          </div>
          
          <div className="today-next-step">
            Наступний крок: Відкрити Google Slides
          </div>
        </section>

        {/* Quick Add / Omnibar */}
        <section className="quick-add-block">
          <div className="omnibar">
            <input 
              type="text" 
              className="omnibar-input"
              placeholder="✨ Що сталося? Що треба зробити? Delio зрозуміє..."
            />
            <div className="omnibar-chips">
              <button className="omnibar-chip">💡 Fact</button>
              <button className="omnibar-chip">🎯 Task</button>
              <button className="omnibar-chip">📝 Note</button>
              <button className="omnibar-chip">🔗 Link</button>
              <button className="omnibar-chip">🧠 Idea</button>
            </div>
          </div>
        </section>

        {/* Mentor & Life Signals Grid */}
        <div className="dashboard-grid dashboard-grid-2">
          {/* Mentor Card */}
          <section className="mentor-block">
            <div className="mentor-header">
              <div className="mentor-icon">💡</div>
              <h3 className="mentor-title">Delio Notice</h3>
            </div>
            
            <ul className="mentor-list">
              <li className="mentor-item">
                <span className="mentor-item-icon">✓</span>
                <div className="mentor-item-content">
                  <div className="mentor-item-label">Що добре</div>
                  <div className="mentor-item-text">
                    Ти найпродуктивніший між <strong>9-11 ранку</strong>. Цей час використано ефективно.
                  </div>
                </div>
              </li>
              
              <li className="mentor-item">
                <span className="mentor-item-icon">⚠</span>
                <div className="mentor-item-content">
                  <div className="mentor-item-label">Що ризиково</div>
                  <div className="mentor-item-text">
                    Цього тижня мало сну (<strong>&lt;7h 4 рази</strong>). Це впливає на фокус.
                  </div>
                </div>
              </li>
              
              <li className="mentor-item">
                <span className="mentor-item-icon">→</span>
                <div className="mentor-item-content">
                  <div className="mentor-item-label">Що далі</div>
                  <div className="mentor-item-text">
                    Спробуй завершити роботу <strong>до 19:00</strong> сьогодні і відпочинь ввечері.
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Life Signals */}
          <section className="life-signals-block">
            <h3 className="card-title mb-6">Life Signals</h3>
            
            <div className="life-signals-grid">
              <div className="life-signal-item">
                <div className="life-signal-label">Rhythm</div>
                <div className="life-signal-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
                <div className="life-signal-human">Стабільно</div>
              </div>
              
              <div className="life-signal-item">
                <div className="life-signal-label">Recovery</div>
                <div className="life-signal-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="life-signal-human" style={{ color: 'var(--warning)' }}>Потребує уваги</div>
              </div>
              
              <div className="life-signal-item">
                <div className="life-signal-label">Load</div>
                <div className="life-signal-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="life-signal-human">Висока</div>
              </div>
              
              <div className="life-signal-item">
                <div className="life-signal-label">Consistency</div>
                <div className="life-signal-dots">
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
                <div className="life-signal-human">Тримаєш</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

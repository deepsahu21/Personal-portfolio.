window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                'aurora-green': '#00ffaa',
                'aurora-blue': '#00aaff',
                'aurora-purple': '#aa00ff',
                'aurora-pink': '#ff00aa',
                'dark-bg': '#0a0e1a',
                'dark-card': '#1a1f2e',
                'dark-border': '#2a2f3e'
            },
            animation: {
                'aurora': 'aurora 15s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'glow': 'glow 2s ease-in-out infinite'
            },
            keyframes: {
                aurora: {
                    '0%, 100%': {
                        backgroundPosition: '0% 50%',
                        backgroundSize: '200% 200%'
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                        backgroundSize: '200% 200%'
                    }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                glow: {
                    '0%, 100%': {
                        boxShadow: '0 0 5px rgba(0, 255, 170, 0.5), 0 0 20px rgba(0, 255, 170, 0.3)'
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(0, 170, 255, 0.8), 0 0 40px rgba(0, 170, 255, 0.4)'
                    }
                }
            }
        }
    }
};

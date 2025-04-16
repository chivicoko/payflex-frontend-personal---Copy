import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        primary_hover: '#1d4ed8',
        secondary: '#CCE2FF',
        secondary_light: '#ecf3fc',
        secondary_lighter: '#D0D5DD',
        customGray: '#E2E2E2',
        textGray: '#6b7280',
        textGrayDarker: '#121212',
        delete: '#b91c1c',
        delete_hover: '#dc2626',
        dark_orange: '#431407',
        yellowish: '#cee1af90',
        yellowish_hover: '#cee9a490',
        fintech: '#7848a9'
      },
      borderRadius: {
        'radius-4': '4px',
        'radius-8': '8px',
        'radius-12': '12px',
      },
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"pulse-slow": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up 0.5s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"pulse-slow": "pulse-slow 3s infinite",
				"float": "float 6s ease-in-out infinite",
			},
			backgroundImage: {
				'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjZmQ4ZTMiPjwvcmVjdD4KPC9zdmc+')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-purple': 'linear-gradient(90deg, rgba(139, 92, 246, 0.9) 0%, rgba(109, 40, 217, 0.9) 100%)',
				'gradient-blue': 'linear-gradient(90deg, rgba(14, 165, 233, 0.9) 0%, rgba(2, 132, 199, 0.9) 100%)',
			},
			boxShadow: {
				'card': '0px 4px 20px rgba(0, 0, 0, 0.05)',
				'card-hover': '0px 8px 30px rgba(0, 0, 0, 0.1)',
				'btn': '0px 2px 8px rgba(139, 92, 246, 0.3)',
        		'custom-xl': '0 8px 12px -3px rgba(153, 79, 133, 0.2), 0 3px 5px -2px rgba(153, 79, 133, 0.15)',
			},
    },
  },
  plugins: [],
};
export default config;

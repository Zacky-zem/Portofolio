"use client"

export default function DataScienceCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-background opacity-60" />

      {/* Chart visualization */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          {/* Bar chart SVG */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="rgba(15, 23, 42, 0.8)"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="2"
            />

            {/* Bar 1 - Green */}
            <rect x="50" y="100" width="30" height="60" fill="url(#gradient1)" rx="4" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1,1; 1,1.2; 1,1"
              dur="3s"
              repeatCount="indefinite"
              origin="50% 160"
            />

            {/* Bar 2 - Pink */}
            <rect x="85" y="80" width="30" height="80" fill="url(#gradient2)" rx="4" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1,1; 1,1.15; 1,1"
              dur="3s"
              begin="0.2s"
              repeatCount="indefinite"
              origin="100% 160"
            />

            {/* Bar 3 - Blue */}
            <rect x="120" y="90" width="30" height="70" fill="url(#gradient3)" rx="4" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1,1; 1,1.18; 1,1"
              dur="3s"
              begin="0.4s"
              repeatCount="indefinite"
              origin="135% 160"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 0.8 }} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#be185d", stopOpacity: 0.8 }} />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#1d4ed8", stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="text-center space-y-1">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">Data Science</h3>
          <p className="text-sm md:text-base text-muted-foreground">Specialist & Analytics</p>
        </div>
      </div>
    </div>
  )
}

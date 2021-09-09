import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="270" rx="4" ry="4" width="280" height="24" />
      <rect x="0" y="310" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="90" height="27" />
      <rect x="130" y="410" rx="25" ry="25" width="150" height="44" />
    </ContentLoader>
)

export default LoadingBlock;
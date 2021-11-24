import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={1}
        width={'100%'}
        height={'auto'}
        viewBox="0 0 100% 100%"
        backgroundColor="#d1d1d1"
        foregroundColor="#ecebeb"
        {...props}
    >
      <rect x="3%" y="9" rx="0" ry="0" width="20%" height="16" />
      <rect x="3%" y="29" rx="0" ry="0" width="10%" height="42" />
      <rect x="10%" y="29" rx="0" ry="0" width="20%" height="19" />
      <rect x="10%" y="53" rx="0" ry="0" width="25%" height="17" />
      <rect x="85%" y="29" rx="0" ry="0" width="7%" height="43" />
      <rect x="7" y="80" rx="0" ry="0" width="39" height="42" />
      <rect x="50" y="80" rx="0" ry="0" width="122" height="19" />
      <rect x="50" y="105" rx="0" ry="0" width="151" height="17" />
      <rect x="245" y="80" rx="0" ry="0" width="31" height="43" />
    </ContentLoader>
)

export default Loader;

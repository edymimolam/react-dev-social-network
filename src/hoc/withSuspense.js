import React, {Suspense} from 'react'
import Preloader from '../components/common/Preloader/Preloader'

// const withSuspense = (WrappedComponent) => {
//   return class extends React.Component {
//     render(){
//       return <Suspense fallback={<Preloader/>}>
//         <WrappedComponent {...this.props}/>
//       </Suspense>
//     }
//   }
// }

const withSuspense = (WrappedComponent) => (props) => {
  return <Suspense fallback={<Preloader/>}>
    <WrappedComponent {...props}/>
  </Suspense>
}



export default withSuspense
import orbit from '../../assets/orbit.min.js?url'
import  '../../assets/orbit.min.css'


export default function MyApp() {
return (
   <div>
     <style>{`.bigbang { height: 300px; } `}</style>
    <div className="bigbang not-content" >
    <div className="gravity-spot">
      <div className="orbit-4 range-90 fit-range">
        <div className="satellite">1</div>
        <div className="satellite"></div>
        <div className="satellite">2</div>
        <div className="satellite"></div>
        <div className="satellite">3</div>
      </div>
      <div className="orbit-5">
        <o-progress shape="zigzag" value="90"></o-progress>
      </div>
      <div className="orbit-6">
        <o-arc>lapalapa</o-arc>
        <o-arc>lapalapa</o-arc>
        <o-arc>lapalapa</o-arc>
        <o-arc>lapalapa</o-arc>
      </div>
    </div>
    
  </div>
  <script src={orbit}></script>
   </div>
    
  

    )
    
}

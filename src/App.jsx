import './App.css'
import ButtonComponent from './assets/ButtonComponent'
import ImageComponent from './assets/ImageComponent'


function App() {
 

  return (
    <>
<div>
  <h2>Ecco i bottoni</h2>
</div>
<div>
<ButtonComponent label= 'PRIMO'  link="https://epicode.com" />
</div>
<div>
<ButtonComponent label= 'SECONDO' link="https://google.com"/>
</div>
<div>
<ButtonComponent label= 'TERZO' link="https://www.juventus.com/it"/>
</div>
<div>
  <h2>ecco le immagini</h2>
</div>
<div>
  <ImageComponent imageUrl="https://placedog.net/300/300" />
</div>
<div>
  <ImageComponent imageUrl="https://placecats.com/300/300"/>
</div>
<div>
  <ImageComponent imageUrl="https://placebear.com/300/300"/>

</div>
<div>
  <ImageComponent imageUrl="https://baconmockup.com/300/300"/>

</div>
    </>
  )
}

export default App

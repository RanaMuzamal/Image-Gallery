import React , {useState , useEffect} from 'react'
import ImageCard from './components/ImageCard';

function App() {
  const [images,setImages]=useState([]);
  const [Isloading,setIsLoading] =useState(true);
  const [term,setTerm] =useState('');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=21735507-878c10a561c991508abd1b1b0&q=yellow+flowers&image_type=photo&pretty=true`)
    .then(res=> res.json())
    .then(data =>console.log(data))
    .catch(err => console.log(err));
  },[term]);
  return (
    <div className="container mx-auto">
      <div className="grid grid-col-3gap-4">
        {images.map((image)=>{
          <ImageCard key={image.id} image={image} />
        })}
      </div>
    </div>
    
  );
}

export default App;

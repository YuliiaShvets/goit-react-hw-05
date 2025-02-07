import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/searchBar/SearchBar.jsx"
import { useState, useEffect } from "react";
import fetchImages from "./services/api.js";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import LoadMore from "./components/loadMore/LoadMore.jsx";
import Loader from "./components/loader/Loader.jsx";
import ImageModal from "./components/imageModal/ImageModal.jsx";
import ErrorMessage from "./components/errorMessage/ErrorMessage.jsx";



const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
 
    useEffect(() => {
      if (!query) return;
      const getData = async () => {
        try {
        setIsLoading(true);
        setIsError(false);
        
      const data = await fetchImages(query, page, perPage);
      if (data.length === 0) {
        toast.error("No images found for this request!", {
          style: {
            background: "rgb(245, 208, 167)",
            color: "black",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
          },
          position: "top-right",
        });
      }
      setImages((image) => [...image, ...data]);
    } catch {
      setIsError(true);
      toast.error(
        "There was an error loading images, please try again later...",
        {
          style: {
            background: "rgb(245, 208, 167)",
            color: "black",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "10px",
          },
          position: "top-right",
        }
      );
    }
    finally {
      setIsLoading(false)
    }
    };

    getData();
  }, [query, page, perPage]);
    

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

const handleSetQuery = newQuery => {
  console.log(newQuery);
  setQuery(newQuery);
  setImages([]);
  setPage(1);
};
const handleReset = () => {
  setImages([]);
  setPage(1);
  toast.success(`ALl filters and pages drop to init values`);
};

const openModal = (imageUrl) => {
  setSelectedImage(imageUrl);
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
  setSelectedImage("");
};

 return (
    <>
  <SearchBar handleSetQuery={handleSetQuery} reset={handleReset}/>
  {!isError ? (
        <ImageGallery images={images} onImageClick={openModal} />
      ) : (
        <ErrorMessage />
      )}
  <Loader loading={isLoading}/>
  {images.length > 0 && !isLoading && !isError && (
        <LoadMore handleClick={handleClick} />
      )}

      <Toaster />
       <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
  </>
    );
  };

  
export default App;
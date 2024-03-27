import { toast } from "react-toastify";

const getStoredBookData = () => {
    const storedBook = localStorage.getItem('books');
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const savedBookData = (id) => {
    const storedBooks = getStoredBookData();
    const existBook = storedBooks.find(bookId => bookId === id);
    if (!existBook) {
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks));
        toast.success("Added to read list successfully")
    }
    else{
        toast.warning('Already added to read')
    }
}


const getStoredWishlistData = () => {
    const storeWishlist = localStorage.getItem('w-books');
    if (storeWishlist) {
        return JSON.parse(storeWishlist);
    }
    return [];
}

const savedWishlistData = (id) => {
    const storedBooks = getStoredBookData();
    const storeWishlists = getStoredWishlistData();

    const existWishlists = storeWishlists.find(bookId => bookId === id);
    const existBook = storedBooks.find(bookId => bookId === id);
    
    if (!existWishlists && !existBook) {
        storeWishlists.push(id);
        localStorage.setItem('w-books', JSON.stringify(storeWishlists));
        toast.success("Added to wishlist successfully")
    }
    else if(existBook){
        toast.warning('Already exist in read')
    }
    else if(existWishlists) {
        toast.warning("Already added to wishlist")
    }
}

export { savedBookData, getStoredBookData , getStoredWishlistData, savedWishlistData}
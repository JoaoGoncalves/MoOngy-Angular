import { BookDetails } from "./book-details";
import { BookList } from "./book-list";
import { bookDetailsResolver } from "../../shared/resolvers/book-details-resolver";

export  const routes = [
    {path: 'list' , component: BookList},
    {
        path: 'details/:id', 
        resolve: {book: bookDetailsResolver} ,
        component: BookDetails,
    },
]
import { createRoot }  from "react-dom/client";
import './tailwind.css';
import FrameworkListFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListFilter/>
            <ResponsiveDesign/>
            <ProductList/>
        </div>
    )

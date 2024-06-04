import ProductForm from "../features/admin/components/ProductForm";
import NavBarAdmin from "../features/navbar/NavbarAdmin";
function AdminProductFormPage() {
    return ( 
        <div>
            <NavBarAdmin>
                <ProductForm></ProductForm>
            </NavBarAdmin>
        </div>
     );
}

export default AdminProductFormPage;
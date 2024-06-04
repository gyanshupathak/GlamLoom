import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import NavBarAdmin from "../features/navbar/NavbarAdmin";
function AdminProductDetailPage() {
    return ( 
        <div>
            <NavBarAdmin>
                <AdminProductDetail></AdminProductDetail>
            </NavBarAdmin>
        </div>
     );
}

export default AdminProductDetailPage;
import AdminProductList from "../features/admin/components/AdminProductList";
import NavBarAdmin from "../features/navbar/NavbarAdmin";

function AdminHome() {
    return ( 
        <div>
            <NavBarAdmin>
                <AdminProductList></AdminProductList>
            </NavBarAdmin>
        </div>
     );
}

export default AdminHome;
import AdminOrders from "../features/admin/components/AdminOrders";
import NavBarAdmin from "../features/navbar/NavbarAdmin";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBarAdmin>
                <AdminOrders></AdminOrders>
            </NavBarAdmin>
        </div>
     );
}

export default AdminOrdersPage;
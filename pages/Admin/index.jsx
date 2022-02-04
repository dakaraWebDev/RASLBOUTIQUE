import React from 'react';
import Link from 'next/link';

const Admin = () => {

  return(
     <div>
        <h1>All Product List</h1>
         <Link href='/Admin/Addproduct'>Add Product</Link>
     </div>
  );
};

export default Admin;

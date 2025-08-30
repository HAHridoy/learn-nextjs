import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* Sidenav */}

            <div className='col-span-3'>
                <ul>
                    <li>user list</li>
                </ul>
            </div>
            {/* Dashboard */}

            <div className='col-span-9'>
                {children}
            </div>
        </div>
    </div>
  )
}

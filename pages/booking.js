import React from 'react'
import { HomeLayout } from '../components/layouts/homeLayout'
import { Appointment } from '../components/common/appointment'

const Booking = () => {
  return (
    <div>
        <HomeLayout pageName={"Booking"}>
            <div className="min-h-[60vh] bg-white text-gray-800 px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-16">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center">Book Appointment</h2>
                  <section>
                      <Appointment/>
                  </section>
            </div>
        </HomeLayout>
    </div>
  )
}

export default Booking
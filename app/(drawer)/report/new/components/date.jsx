/* Date Time Picker tiene soporte deprecado para Expo */

import React, { useState } from 'react'
import DatePicker from 'react-native-modern-datepicker'

const TimePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <DatePicker
      onSelectedChange={date => setSelectedDate(date)}
    />
  )
}

export default TimePickerComponent

import { useState, useEffect } from 'react';

import { Chip } from 'react-native-paper';

const ChipComponent = () => {

    const [chip, setChip] = useState(false);

    const handleChipSelected = () => {
      setChip(chip => !chip )
      console.log(chip)

    }

    useEffect(() => setChip(chip) , [chip])

    return(
            <Chip selected showSelectedCheck={chip} showSelectedOverlay={chip} mode='outlined' elevated={true} onPress={ handleChipSelected } >
              Example Chip 1 
            </Chip>       
    )
}

export default ChipComponent;
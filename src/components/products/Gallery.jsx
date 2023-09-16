import React, { Fragment, useState } from 'react';
import MasonryGallery from './MasonryGallery';
import QuiltedGallery from './QuiltedGallery';
import WovenGallery from './WovenGallery';
import CostomGallery from './CostumGallery';
import { Box, Container, Fab } from '@mui/material';
import { ChangeCircle, Favorite, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Composant de bouton pour changer le mode d'affichage
function ModeSwitchButton({ currentMode, onModeChange }) {
  const modes = ['Mode 1', 'Mode 2', 'Mode 3', 'Mode 4']; // Liste des modes d'affichage

  const handleModeChange = () => {
    const currentIndex = modes.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    onModeChange(modes[nextIndex]);
  };

  return (
    <Container sx={{
      backgroundColor: 'none',  
      position: 'fixed', 
      zIndex: 1000, 
      padding : 5,
      display: 'flex !important',
      justifyContent: 'right'}}>
        <Fab  
          sx={{  
            position: 'fixed', 
            zIndex: 1000, }}
          aria-label="change style" 
           onClick={handleModeChange}> 
          <ChangeCircle />
        </Fab>
      </Container>
  );


}

// Composant principal Gallery
function Gallery() {
  const [currentMode, setCurrentMode] = useState('Mode 1');
  const navigate = useNavigate();

  const handleModeChange = (newMode) => {
    setCurrentMode(newMode);
  };

  const toHome = () => {
    navigate('/');
  };

  return (
    <div>
      <ModeSwitchButton currentMode={currentMode} onModeChange={handleModeChange} />
      <Container sx={{
        backgroundColor: 'none',  
        position: 'fixed', 
        zIndex: 1000, 
        padding : 5,
        marginTop: 10,
        display: 'flex !important',
        justifyContent: 'right'}}>
          <Fab  
            sx={{  
              position: 'fixed', 
              zIndex: 1000, }}
            aria-label="change style" 
            onClick={toHome}> 
            <Home />
          </Fab>
        </Container>
      {currentMode === 'Mode 1' && (
        <div>
          <MasonryGallery/>
          {/* Insérez ici le contenu pour le Mode 1 */}
        </div>
      )}
      {currentMode === 'Mode 2' && (
        <div>
          <QuiltedGallery/>
          {/* Insérez ici le contenu pour le Mode 2 */}
        </div>
      )}
      {currentMode === 'Mode 3' && (
        <div>
          <WovenGallery/>
          {/* Insérez ici le contenu pour le Mode 3 */}
        </div>
      )}

      {currentMode === 'Mode 4' && (
          <div>
            <CostomGallery/>
            {/* Insérez ici le contenu pour le Mode 3 */}
          </div>
        )}
    </div>
  );
}

export default Gallery;

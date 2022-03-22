package com.alpha.alphabackend.service;

import java.util.List;
import java.util.Optional;

import com.alpha.alphabackend.entity.Joueur;
import com.alpha.alphabackend.repository.JoueurRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class JoueurService {
 
    private final JoueurRepository joueurRepository ;
    
    @Autowired(required = true)
    public JoueurService(JoueurRepository joueurRepository){
        this.joueurRepository = joueurRepository ;
    }

   public void addNewJoueur(Joueur joueur){
     Optional<Joueur> joueurOptional =  joueurRepository.findByEmail(joueur.getEmail());
        if (joueurOptional.isPresent()) {
            throw new IllegalStateException("Email is already taken");
        }
        joueurRepository.save(joueur);
    }

    public List<Joueur> getJoueurs(){
        return joueurRepository.findAll();
    }
    public void deleteJoueur(Integer joueurId){
        boolean rep = joueurRepository.existsById(joueurId);
        if (!rep) {
            throw new IllegalStateException("Email don't not exist");
        }
        joueurRepository.deleteById(joueurId );
    }

}

package api;

import java.util.List;

import com.alpha.alphabackend.entity.Joueur;
import com.alpha.alphabackend.service.JoueurService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/joueurs")
public class JoueurController {
    
    private final JoueurService joueurService;
    @Autowired
    public JoueurController(JoueurService joueurService){
        this.joueurService = joueurService;
    }
    
    @GetMapping
    public List<Joueur> getJoueurs(){
      return joueurService.getJoueurs();
    }
    
    @PostMapping
    public void registerNewJoueur(@RequestBody Joueur joueur){
        joueurService.addNewJoueur(joueur);
    }

    @DeleteMapping(path = "{id}")
    public void deleteJoueur(@PathVariable("id") Integer id){
       joueurService.deleteJoueur(id);
    }
}

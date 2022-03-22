package com.alpha.alphabackend.configuration;

import com.alpha.alphabackend.entity.Joueur;
import com.alpha.alphabackend.repository.JoueurRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JoueurConf {
    
    @Bean
    CommandLineRunner commandLineRunner(JoueurRepository joueurRepository){
        return args->{

       Joueur j1 = new Joueur();
        };
    }
}

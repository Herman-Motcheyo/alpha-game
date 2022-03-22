package com.alpha.alphabackend.repository;

import java.util.Optional;

import com.alpha.alphabackend.entity.Joueur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoueurRepository extends JpaRepository<Joueur , Integer> {
 Optional<Joueur> findByEmail(String email);
}

package com.alpha.alphabackend.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Joueur {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(  nullable = false)
    private String nom;

    @Column( nullable = false)
    private String prenom;

    @Column( nullable = false)
    private String pseudo;

    @Column( nullable = false)
    private String password;
    
    @Column( nullable = false)
    private String email;

    private List<Partie> partie ;
 
 public Joueur(){}


	public Joueur( String nom, String prenom, String pseudo, String password, String email) {
		this.nom = nom;
		this.prenom = prenom;
		this.pseudo = pseudo;
		this.password = password;
		this.email = email;
	}
 
 public Joueur(int id, String nom, String prenom, String pseudo, String password, String email) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.pseudo = pseudo;
		this.password = password;
		this.email = email;
	}

    

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getNom() {
	return nom;
}

public void setNom(String nom) {
	this.nom = nom;
}

public String getPrenom() {
	return prenom;
}

public void setPrenom(String prenom) {
	this.prenom = prenom;
}

public String getPseudo() {
	return pseudo;
}

public void setPseudo(String pseudo) {
	this.pseudo = pseudo;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public List<Partie> getPartie() {
	return partie;
}

public void setPartie(List<Partie> partie) {
	this.partie = partie;
}
@Override
public String toString() {
	return "Joueur [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", pseudo=" + pseudo + ", password=" + password
			+ ", email=" + email + "]";
}
}

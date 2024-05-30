export interface UserLdap {
    login: string;
    nom: string;
    prenom: string;
    nomComplet: string;
    motDePasse: string | null;
    mail: string;
    role: string;
    employerNumero: number;
    employerNiveau: number;
    dateEmbauche: string;
    publisherId: number;
    active: boolean;
}
import { UserLdap } from "./user-ldap";

export const LDAP_USERS: UserLdap[] = [
    {
        login: "test.v1",
        nom: "V1",
        prenom: "Test",
        nomComplet: "V1 Test",
        motDePasse: null,
        mail: "test.v1@epsi.fr",
        role: "ROLE_USER",
        employerNumero: 1234,
        employerNiveau: 120,
        dateEmbauche: '2020-01-01',
        publisherId: 1,
        active: true
    },
    {
        login: "test.v2",
        nom: "V2",
        prenom: "Test",
        nomComplet: "V2 Test",
        motDePasse: null,
        mail: "test.v2@epsi.fr",
        role: "ROLE_USER",
        employerNumero: 2234,
        employerNiveau: 220,
        dateEmbauche: '2020-02-02',
        publisherId: 2,
        active: false
    },
]
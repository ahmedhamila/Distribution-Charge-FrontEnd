import Table from "@/components/shared/Table"
import React from "react"
import qs from "qs"
import { useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { useSelector } from "react-redux"
import "./ConsultationEnseignant.css"

const ConsultationEnseignant = () => {
    const { enseignantId, cin, nom, prenom, nombreHeures } = useSelector((state) => state.ConsultingEnseignant)
    const columns = useMemo(
        () => [
            {
                Header: "Matière",
                accessor: "Matter",
            },
            {
                Header: "TP",
                accessor: "TP",
            },
            {
                Header: "Cours",
                accessor: "Cours",
            },
            {
                Header: "TD",
                accessor: "TD",
            },
            {
                Header: "Charge Horaire",
                accessor: "HourlyLoad",
            },
        ],
        []
    )

    const data = useMemo(
        () => [
            {
                Matter: "UML/OCL",
                TP: "-",
                TD: "29",
                Cours: "-",
                HourlyLoad: "29",
            },
            {
                Matter: "Projet Web/Mobile",
                TP: "-",
                TD: "30",
                Cours: "-",
                HourlyLoad: 30,
            },
            {
                Matter: "Total:",
                TP: "-",
                TD: "-",
                Cours: "-",
                HourlyLoad: "Application de la formule de charge",
            },
        ],
        []
    )
    return (
        <div className="Consultation_Enseignant_Container">
            <div className="Consultation_Enseignant_Tiltle">
                <h4 className="h4-Enseignant">Enseignant X</h4>
            </div>
            <div className="Enseignant_Avatar">
                <Avatar className="AvatarConsulterEnseignant">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h5 className="Enseignant_Account">Account</h5>
            </div>
            <div className="Enseignant_CoordonneesContainer">
                <div className="Enseignant_Coordonnees">
                    <h6>Name</h6>
                    <p>
                        {nom} {prenom}
                    </p>
                    <h6>CIN</h6>
                    <p>{cin}</p>
                    <h6>Rapport de charge horaire</h6>
                    <p>{nombreHeures}</p>
                </div>
            </div>
            <Table columns={columns} data={data} />
        </div>
    )
}

export default ConsultationEnseignant

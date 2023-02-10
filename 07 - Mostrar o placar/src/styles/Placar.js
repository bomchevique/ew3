// importando o pacote
import { StyleSheet } from "react-native"

// exportando o estilo
export default StyleSheet.create({

    placar: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },

    placarTitulo: {
        color: "#5B8FB9",
        fontSize: 24,
        textAlign: "center"
    },

    placarPontuacao: {
        color: "#B6EADA",
        fontSize: 64,
        fontWeight: "bold",
        paddingVertical: 16,
        textAlign: "center"
    },

    placarCampo: {
        flexDirection: "row",
        justifyContent: "center"
    },

    placarBotao: {
        backgroundColor: "#5B8FB9",
        color: "#fff",
        padding: 16,
        marginHorizontal: 4
    }
    
})
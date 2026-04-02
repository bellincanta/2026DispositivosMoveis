import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  areaCentral: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },

  statusTexto: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },

  ativo: {
    color: 'green',
  },

  inativo: {
    color: 'red',
  },

  contador: {
    fontSize: 18,
    marginBottom: 24,
  },

  botaoPrimario: {
    backgroundColor: '#1e88e5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
    width: 220,
    alignItems: 'center',
  },

  botaoSecundario: {
    backgroundColor: '#6d4c41',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 220,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
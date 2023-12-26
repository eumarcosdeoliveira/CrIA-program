import requests
from bs4 import BeautifulSoup
import random

def buscar_titulo(site):
    try:
        # Faz a requisição HTTP para o site
        response = requests.get(site)

        # Verifica se a requisição foi bem-sucedida
        if response.status_code == 200:
            # Faz o parsing do HTML da página
            soup = BeautifulSoup(response.text, 'html.parser')

            # Encontra o título da página (substitua 'nome_do_seletor' pelo seletor real)
            titulo = soup.find('nome_do_seletor').text

            return titulo
        else:
            print(f"Erro na requisição: {response.status_code}")
            return None
    except Exception as e:
        print(f"Erro: {e}")
        return None

def main():
    # Lista de sites aleatórios para testar
    sites = ['http://site1.com', 'http://site2.com', 'http://site3.com']

    # Escolhe um site aleatório
    site_aleatorio = random.choice(sites)

    # Busca o título no site aleatório
    titulo_encontrado = buscar_titulo(site_aleatorio)

    # Exibe o resultado
    if titulo_encontrado:
        print(f"Título encontrado: {titulo_encontrado}")
    else:
        print("Título não encontrado")

if __name__ == "__main__":
    main()

import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from tqdm import tqdm

link = 'https://podacochar.com.br/clodoaldo-magalhaes-vira-cidadao-solidanense/'

# Adicione um User-Agent ao cabeçalho da solicitação
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
requisicao = requests.get(link, headers=headers)

site = BeautifulSoup(requisicao.text, "html.parser")

# Encontrar todas as figuras com a classe especificada
imagens_figura = site.find_all('figure', class_='wp-caption')

for figura in imagens_figura:
    # Encontrar a imagem dentro da figura
    imagem = figura.find('img')

    if imagem:
        link_da_imagem = imagem.get('src')

        # Obter o conteúdo da imagem
        imagem_requisicao = requests.get(link_da_imagem, headers=headers, stream=True)

        # Obter o tamanho do arquivo (para a barra de progresso)
        tamanho_do_arquivo = int(imagem_requisicao.headers.get('content-length', 0))

        # Especificar o caminho completo do arquivo usando barras inclinadas
        caminho_do_arquivo = os.path.join('C:/Users/marco/OneDrive/Área de Trabalho/Cria Projeto/FRONT-END/cria/src/assets/img', 'imagem.jpg')

        # Salvar a imagem localmente com barra de progresso
        with open(caminho_do_arquivo, 'wb') as f, tqdm(
            desc="Baixando Imagem",
            total=tamanho_do_arquivo,
            unit="B",
            unit_scale=True,
            unit_divisor=1024,
        ) as barra_progresso:
            for dado in imagem_requisicao.iter_content(chunk_size=1024):
                tamanho = f.write(dado)
                barra_progresso.update(tamanho)

        print("Imagem baixada com sucesso em:", caminho_do_arquivo)
    else:
        print("Nenhuma imagem encontrada.")

titulos = site.find_all('h1')
if titulos:
    valordotitulo = titulos[0].get_text()
    print("Título:", valordotitulo)
else:
    print("Nenhum título h1 encontrado.")

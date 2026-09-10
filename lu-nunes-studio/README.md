# Lu Nunes Studio

Pipeline simples de geração image-to-video da personagem virtual Lu Nunes via GitHub Actions + Wan 2.2.

## Já configurado

- gerador image-to-video;
- prompt-base para preservar rosto, cabelo, idade aparente e estética;
- workflow manual no GitHub Actions;
- testes automatizados antes de cada geração;
- resultado salvo como artifact com a URL do MP4.

## Única credencial necessária

Crie uma conta na fal.ai e adicione sua chave em:

`Settings → Secrets and variables → Actions → New repository secret`

Nome do secret:

`FAL_KEY`

## Rodar

Abra `Actions → Generate Lu video → Run workflow`.

Informe:

- `image_url`: URL pública da imagem canônica da Lu;
- `scene`: apenas o que ela fará na tomada.

Prompt recomendado para a primeira continuação:

`Lu records a casual selfie vlog inside her luxurious contemporary home in Greater Vitória, Brazil. She smiles naturally, picks up a small black handbag, walks toward the front door, and the final shot briefly reveals a dark luxury sports car outside. Quiet Brazilian luxury, believable affluent lifestyle, natural daylight, subtle handheld imperfections.`

O endpoint configurado é `fal-ai/wan/v2.2-a14b/image-to-video`. O custo e a disponibilidade dependem da conta da fal.ai.

A personagem é fictícia. Para publicação em plataformas, sinalize conteúdo sintético realista quando a plataforma exigir.

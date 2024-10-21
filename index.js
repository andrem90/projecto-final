
function criarEstruturaHTML() {
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Monitoramento de Visitantes - Exposição de Arte';
    h1.style.textAlign = 'center';
    h1.style.color = '#333';
    document.body.appendChild(h1);
  
    const loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading');
    loadingDiv.setAttribute('id', 'loading');
    loadingDiv.innerHTML = '<p>Carregando dados...</p>';
    loadingDiv.style.textAlign = 'center';
    loadingDiv.style.marginTop = '50px';
    document.body.appendChild(loadingDiv);
  

    const table = document.createElement('table');
    table.setAttribute('id', 'dadosTable');
    table.style.width = '80%';
    table.style.margin = '20px auto';
    table.style.borderCollapse = 'collapse';
    table.style.backgroundColor = 'white';
    table.style.display = 'none'; 
  
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['ID do Quadro', 'Nome do Quadro', 'Visitantes', 'Tempo Médio (s)'];
    headers.forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      th.style.backgroundColor = '#6c757d';
      th.style.color = 'white';
      th.style.padding = '12px';
      th.style.textAlign = 'center';
      th.style.border = '1px solid #ddd';
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    
    const tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'dados');
    table.appendChild(tbody);
  
    document.body.appendChild(table);
  
    
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f4f4f9';
    document.body.style.margin = '0';
    document.body.style.padding = '20px';
  }
  
  
  async function carregarDados() {
    const loading = document.getElementById('loading');
    const dadosTable = document.getElementById('dadosTable');
    const tbody = document.getElementById('dados');
  
    const sensores = [
      { quadroID: 1, nome: "Mona Lisa", visitantes: 20, tempoMedio: 30 },
      { quadroID: 2, nome: "A Noite Estrelada", visitantes: 15, tempoMedio: 25 },
      { quadroID: 3, nome: "O Grito", visitantes: 10, tempoMedio: 40 },
      { quadroID: 4, nome: "A Última Ceia", visitantes: 18, tempoMedio: 35 }
    ];
  
    loading.style.display = 'none';
    dadosTable.style.display = 'table';
  
   
    sensores.forEach(sensor => {
      const row = document.createElement('tr');
      const quadroIDCell = document.createElement('td');
      const nomeCell = document.createElement('td');
      const visitantesCell = document.createElement('td');
      const tempoMedioCell = document.createElement('td');
  
      quadroIDCell.textContent = sensor.quadroID;
      nomeCell.textContent = sensor.nome;
      visitantesCell.textContent = sensor.visitantes;
      tempoMedioCell.textContent = sensor.tempoMedio;
  
      
      [quadroIDCell, nomeCell, visitantesCell, tempoMedioCell].forEach(cell => {
        cell.style.padding = '12px';
        cell.style.textAlign = 'center';
        cell.style.border = '1px solid #ddd';
      });
  
      row.appendChild(quadroIDCell);
      row.appendChild(nomeCell);
      row.appendChild(visitantesCell);
      row.appendChild(tempoMedioCell);
  
      tbody.appendChild(row);
    });
  }
  
  
  window.onload = function () {
    criarEstruturaHTML();
    carregarDados();
  };
  
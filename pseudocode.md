### Sten, sax, påse

START 
Visa meddelande som säger "Välj sten, sax eller påse" 
Spelare matar in sitt val med prompt 

Skapa en lista med möjliga val: ['sten', 'sax', 'påse']
Slumpa ett av dessa val till datorn 

Skriv ut spelarens val 
Skriv ut datorns val 

Om spelare == dator 
    Skriv 'Oavgjort'
Annars om (spelare == sten och dator == sax) eller
          (spelare == sax och dator == påse) eller
          (spelare == påse och dator == sten)
    Skriv 'Du vann!'

Annars 
    Skriv 'Datorn vann!' 
END 

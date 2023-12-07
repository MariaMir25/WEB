function swapTexts() {
			let text1 = document.querySelector('.header').textContent;
			let text6 = document.querySelector('.section6').textContent;

			document.querySelector('.header').textContent = text6;
			document.querySelector('.section6').textContent = text1;
		}
				

		function calculatePentagonArea(side) {
			const area = (side ** 2) * (5 * (5 + 2 * Math.sqrt(5))) ** 0.5 / 4;
			return area;
		}

		function displayPentagonArea() {
			const sideLength = 10;
			const pentagonArea = calculatePentagonArea(sideLength);

			document.querySelector('.section3').innerHTML = `Площа п'ятикутника зі стороною ${sideLength} одиниць дорівнює ${pentagonArea} одиницям квадратним.`;
		}

		function checkTriangle() {
			const sideA = parseFloat(document.getElementById('sideA').value);
			const sideB = parseFloat(document.getElementById('sideB').value);
			const sideC = parseFloat(document.getElementById('sideC').value);

			if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
				const triangleInfo = `Можливо побудувати трикутник зі сторонами ${sideA}, ${sideB} і ${sideC}.`;
				document.cookie = `triangle=${triangleInfo}`;
				alert(triangleInfo + '\nІнформація збережена в cookies.');
			} else {
				alert('Такий трикутник не існує. Введіть інші значення.');
			}
		}

		function deleteCookies() {
			document.cookie = 'triangle=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			alert('Cookies видалені.');
		}
		
		
		 function handleCheckboxChange() {
        const checkbox = document.querySelector('#upperCaseCheckbox');
        const block4 = document.querySelector('.section4');
        let originalText = block4.textContent;

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                let text = block4.textContent;
                let words = text.split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].toUpperCase();
                }
                block4.textContent = words.join(' ');
            } else {
                block4.textContent = originalText;
            }
        });
    }

    document.addEventListener('DOMContentLoaded', handleCheckboxChange);
	
	document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.section2, .section4, .section6');

    function saveChanges() {
        containers.forEach(container => {
            container.contentEditable = true;  
            const editableContent = container.querySelector('p') || container;
            localStorage.setItem(container.classList[0], editableContent.textContent);
        });
        alert('Зміни збережено в localStorage');
    }

    function restoreChanges() {
        containers.forEach(container => {
            container.contentEditable = true;  
            const editableContent = container.querySelector('p') || container;
            const initialText = localStorage.getItem(container.classList[0]);
            if (initialText) {
                editableContent.textContent = initialText;
            }
        });
    }

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Зберегти зміни';
    saveButton.onclick = saveChanges;
	saveButton.style.fontSize = '25px';
    document.body.insertBefore(saveButton, document.querySelector('main'));

    restoreChanges();

    const restoreButton = document.createElement('button');
    restoreButton.textContent = 'Відновити початковий текст';
    restoreButton.onclick = restoreChanges;
	restoreButton.style.fontSize = '25px';
    document.body.insertBefore(restoreButton, document.querySelector('main'));
});
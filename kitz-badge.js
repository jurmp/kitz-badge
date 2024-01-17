// badge.js

function createAndAppendBadge() {
    // Create a container div for the badge
    var badgeContainer = document.createElement('div');
    badgeContainer.className = 'kitz_badge';

    // Create a link element
    var linkElement = document.createElement('a');
    linkElement.href = 'https://kitz.ng';
    linkElement.target = '_blank';

    // Create the left side of the badge
    var leftSide = document.createElement('div');
    leftSide.className = 'lft';

    // Create an SVG element for the left side
    var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('width', '24');
    svgElement.setAttribute('height', '24');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('fill', 'none');

    // Create a circle in the SVG
    var circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleElement.setAttribute('cx', '12');
    circleElement.setAttribute('cy', '12');
    circleElement.setAttribute('r', '12');
    circleElement.setAttribute('fill', '#4353FF');

    // Create a path in the SVG
    var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', 'M9.13352 3.72031C10.8032 3.72031 12.0948 5.1841 11.887 6.8408L11.2199 12.1577H11.4357C11.6139 12.1577 11.7577 12.1309 11.8674 12.0773C11.977 12.0236 12.0866 11.9264 12.1963 11.7856C12.9101 10.8325 13.7141 9.0353 14.8273 8.46699C14.9849 8.38654 15.4029 8.34631 15.4029 8.34631H18.2601L15.2795 12.0572C15.1425 12.2315 14.9918 12.3857 14.8273 12.5198C14.6629 12.6539 14.4916 12.7712 14.3134 12.8718C14.4573 12.9857 14.5807 13.1198 14.6834 13.274C14.7931 13.4215 14.889 13.5925 14.9712 13.7869L17.109 18.7749H14.334C12.9844 18.7749 12.3398 15.5343 11.9496 14.5612C11.8742 14.3936 11.792 14.2864 11.7029 14.2394C11.6207 14.1858 11.4837 14.159 11.2918 14.159H10.9629L10.7765 15.6541C10.5542 17.4369 9.03897 18.7749 7.24243 18.7749V18.7749L9.13352 3.72031V3.72031Z');
    pathElement.setAttribute('fill', 'white');

    // Append the circle and path to the SVG
    svgElement.appendChild(circleElement);
    svgElement.appendChild(pathElement);

    // Append the SVG to the left side
    leftSide.appendChild(svgElement);

    // Create the right side of the badge
    var rightSide = document.createElement('div');
    rightSide.className = 'rgt';

    // Create a paragraph for the right side
    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'Designed by Kitz';

    // Append the paragraph to the right side
    rightSide.appendChild(paragraphElement);

    // Append the left and right sides to the link
    linkElement.appendChild(leftSide);
    linkElement.appendChild(rightSide);

    // Append the link to the container
    badgeContainer.appendChild(linkElement);

    // Append the container to the body of the document
    document.body.appendChild(badgeContainer);

    // Add a click event listener to the link
    linkElement.addEventListener('click', function() {
        // Handle the click event (you can add your custom logic here)
        alert('Link clicked!');
    });
}

// Call the function when the script is loaded
createAndAppendBadge();

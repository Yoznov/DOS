const commandLine = document.getElementById('command-line');
const userInput = document.getElementById('user-input');
const cursor = document.getElementById('cursor');
const currentDirectory = 'C:\\Users\\Student>'; 

userInput.focus();

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = userInput.value;
        const output = document.createElement('p');
        output.textContent = `${currentDirectory} ${command}`; 
        commandLine.appendChild(output);

        handleCommand(command);

        userInput.value = '';
    }
});

function handleCommand(command) {
    const commandLowerCase = command.toLowerCase();

    switch (commandLowerCase) {
        case 'help':
            displayHelp();
            break;
        case 'date':
            displayDate();
            break;
        case 'time':
            displayTime();
            break;
        case 'cls':
            clearScreen();
            break;
        case 'dir':
            displayDirectory();
            break;
        case 'ver':
            displayVersion();
            break;
        case 'exit':
            exitCommandPrompt();
            break;
        case 'echo':
            echoCommand(command);
            break;
        case 'ping':
            pingCommand();
            break;
        case 'ipconfig':
            ipConfigCommand();
            break;
        case 'systeminfo':
            systemInfoCommand();
            break;
        case 'cd':
            changeDirectoryCommand();
            break;
        case 'hello':
        case 'Hello':
            helloCommand();
            break;
        // Add more commands here
        default:
            unknownCommand(command);
            break;
    }
}

function displayHelp() {
    const commands = [
        'help - Display this list of commands',
        'date - Display the current date',
        'time - Display the current time',
        'cls - Clear the screen',
        'dir - Display the list of files and subdirectories in the current directory',
        'ver - Display the current version of the operating system',
        'exit - Exit the command prompt',
        'echo [message] - Display a message',
        'ping [host] - Ping a host',
        'ipconfig - Display IP configuration',
        'systeminfo - Display system information',
        'cd [directory] - Change directory',
        // Add more commands here
    ];

    commands.forEach(cmd => {
        const output = document.createElement('p');
        output.textContent = cmd;
        commandLine.appendChild(output);
    });
}

function displayDate() {
    const date = new Date();
    const output = document.createElement('p');
    output.textContent = date.toDateString();
    commandLine.appendChild(output);
}

function displayTime() {
    const time = new Date();
    const output = document.createElement('p');
    output.textContent = time.toLocaleTimeString();
    commandLine.appendChild(output);
}

function clearScreen() {
    commandLine.innerHTML = '';
}

function displayDirectory() {
    const files = ['file1.txt', 'file2.txt', 'folder1', 'folder2'];
    files.forEach(file => {
        const output = document.createElement('p');
        output.textContent = file;
        commandLine.appendChild(output);
    });
}

function displayVersion() {
    const output = document.createElement('p');
    output.textContent = 'Version 1.0';
    commandLine.appendChild(output);
}

function exitCommandPrompt() {
    const output = document.createElement('p');
    output.textContent = 'Exiting command prompt...';
    commandLine.appendChild(output);
    setTimeout(() => {
        window.close(); // Close the browser window/tab
    }, 1000);
}

function echoCommand(command) {
    const message = command.substring(5); // Extracting the message after "echo"
    const output = document.createElement('p');
    output.textContent = message;
    commandLine.appendChild(output);
}

function pingCommand() {
    const output = document.createElement('div');
    output.innerHTML = `
        <p>Usage: ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL] [-v TOS]</p>
        <p>            [-r count] [-s count] [[-j host-list] | [-k host-list]]</p>
        <p>            [-w timeout] [-R] [-S srcaddr] [-c compartment] [-p]</p>
        <p>            [-4] [-6] target_name</p>
        <br>
        <p>Options:</p>
        <p>    -t             Ping the specified host until stopped.</p>
        <p>                   To see statistics and continue - type Control-Break;</p>
        <p>                   To stop - type Control-C.</p>
        <p>    -a             Resolve addresses to hostnames.</p>
        <p>    -n count       Number of echo requests to send.</p>
        <p>    -l size        Send buffer size.</p>
        <p>    -f             Set Don't Fragment flag in packet (IPv4-only).</p>
        <p>    -i TTL         Time To Live.</p>
        <p>    -v TOS         Type Of Service (IPv4-only. This setting has been deprecated</p>
        <p>                   and has no effect on the type of service field in the IP</p>
        <p>                   Header).</p>
        <p>    -r count       Record route for count hops (IPv4-only).</p>
        <p>    -s count       Timestamp for count hops (IPv4-only).</p>
        <p>    -j host-list   Loose source route along host-list (IPv4-only).</p>
        <p>    -k host-list   Strict source route along host-list (IPv4-only).</p>
        <p>    -w timeout     Timeout in milliseconds to wait for each reply.</p>
        <p>    -R             Use routing header to test reverse route also (IPv6-only).</p>
        <p>                   Per RFC 5095 the use of this routing header has been</p>
        <p>                   deprecated. Some systems may drop echo requests if</p>
        <p>                   this header is used.</p>
        <p>    -S srcaddr     Source address to use.</p>
        <p>    -c compartment Routing compartment identifier.</p>
        <p>    -p             Ping a Hyper-V Network Virtualization provider address.</p>
        <p>    -4             Force using IPv4.</p>
        <p>    -6             Force using IPv6.</p>
    `;
    commandLine.appendChild(output);
}


function ipConfigCommand() {
    const output = document.createElement('div');
    output.innerHTML = `
        <p>Windows IP Configuration</p>
        <br>
        <p>Ethernet adapter Ethernet:</p>
        <p>   Connection-specific DNS Suffix  . : </p>
        <p>   Link-local IPv6 Address . . . . . : fe80::6e45:d51f:7b9f:f4c9%14 </p>
        <p>   IPv4 Address. . . . . . . . . . . : 192.168.1.10 </p>
        <p>   Subnet Mask . . . . . . . . . . . : 255.255.255.0 </p>
        <p>   Default Gateway . . . . . . . . . : fe80::1%14 </p>
        <p>                                       192.168.1.1 </p>
        <br>
        <p>Wireless LAN adapter Local Area Connection* 1:</p>
        <p>   Media State . . . . . . . . . . . : Media disconnected </p>
        <p>   Connection-specific DNS Suffix  . : </p>
        <br>
        <p>Wireless LAN adapter Local Area Connection* 2:</p>
        <p>   Media State . . . . . . . . . . . : Media disconnected </p>
        <p>   Connection-specific DNS Suffix  . : </p>
        <br>
        <p>Wireless LAN adapter Wi-Fi:</p>
        <p>   Media State . . . . . . . . . . . : Media disconnected </p>
        <p>   Connection-specific DNS Suffix  . : </p>
    `;
    commandLine.appendChild(output);
}


function systemInfoCommand() {
    const output = document.createElement('p');
    output.textContent = 'System Information (Not implemented)';
    commandLine.appendChild(output);
}

function changeDirectoryCommand() {
    const output = document.createElement('p');
    output.textContent = 'Change directory (Not implemented)';
    commandLine.appendChild(output);
}

function unknownCommand(command) {
    const output = document.createElement('p');
    output.textContent = `Unknown command: (Maybe I didn't put the command yet sorry!)`;
    commandLine.appendChild(output);
}

function helloCommand() {
    const output = document.createElement('p');
    output.textContent = 'Hello welcome to Command Prompt';
    commandLine.appendChild(output);
}

// Blink cursor
setInterval(function() {
    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500);

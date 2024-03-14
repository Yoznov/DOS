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
        case 'Help':
        case 'HELP':
            displayHelp();
            break;
        case 'date':
        case 'Date':
        case 'DATE':
            displayDate();
            break;
        case 'time':
        case 'Time':
        case 'TIME':
            displayTime();
            break;
        case 'cls':
        case 'Cls':
        case 'CLS':
            clearScreen();
            break;
        case 'dir':
        case 'Dir':
        case 'DIR':
            displayDirectory();
            break;
        case 'ver':
        case 'Ver':
        case 'VER':
            displayVersion();
            break;
        case 'exit':
        case 'Exit':
        case 'EXIT':
            exitCommandPrompt();
            break;
        case 'echo':
        case 'Echo':
        case 'ECHO':
            echoCommand(command);
            break;
        case 'ping':
        case 'Ping':
        case 'PING':
            pingCommand();
            break;
        case 'ipconfig':
        case 'Ipconfig':
        case 'IPCONFIG':
            ipConfigCommand();
            break;
        case 'systeminfo':
        case 'Systeminfo':
        case 'SYSTEMINFO':
            systemInfoCommand();
            break;
        case 'cd':
        case 'Cd':
        case 'CD':
            changeDirectoryCommand();
            break;
        case 'attrib':
        case 'Attrib':
        case 'ATTRIB':
            Attribcommand();
            break;
        case 'break':
        case 'Break':
        case 'BREAK':
            breakCommand();
            break;
        case 'tree':
        case 'Tree':
        case 'TREE':
            displayTreeVideo();
            break;
        case 'chkdsk':   
            chkdskcommand();
            break;
        case 'comp':
            compCommand();
            break;       
        case 'copy':
            copyCommand();
            break;
        case 'del':
            delCommand();
            break;
        case 'erase':
            eraseCommand();
            break;           
        case 'find':
            findCommand();
            break;           
        case 'format':
            formatCommand();
            break;           
        case 'label':
            labelCommand();
            break;           
        case 'mklink':
            mklinkCommand();
            break;           
        case 'path':
            pathCommand();
            break;           
        case 'pause':
            pauseCommand();
            break;           
        case 'pushd':
            pushdCommand();
            break;           
        case 'recover':
            recoverCommand();
            break;           
        case 'rem':
            remCommand();
            break;           
        case 'replace':
            replaceCommand();
            break;           
        case 'start':
            startCommand();
            break;           
        case 'vol':
            volCommand();
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
        'attrib - Displays or changes file attributes.',
        'break - Sets or clears extended CTRL+C checking.',
        'tree - Graphically displays the directory structure of a drive or path.',
        'chkdsk - Checks a disk and displays a status report.',
        'comp - Compares the contents of two files or sets of files.',
        'copy - Copies one or more files to another location.',
        'del - Deletes one or more files.',
        'erase - Deletes one or more files.',
        'find - Searches for a text string in a file or files.',
        'format - Formats a disk for use with Windows.',
        'label - Creates, changes, or deletes the volume label of a disk.',
        'mklink - Creates Symbolic Links and Hard Links',
        'path - Displays or sets a search path for executable files.',
        'pause - Suspends processing of a batch file and displays a message.',
        'pushd - Saves the current directory then changes it.',
        'recover - Recovers readable information from a bad or defective disk.',
        'rem - Records comments (remarks) in batch files or CONFIG.SYS.',
        'replace - Replaces files.',
        'start - Starts a separate window to run a specified program or command.',
        'vol - Displays a disk volume label and serial number.',

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
    output.textContent = `Unknown command: (Maybe we didn't put the command yet sorry!)`;
    commandLine.appendChild(output);
}

function helloCommand() {
    const output = document.createElement('p');
    output.textContent = 'Hello welcome to Command Prompt';
    commandLine.appendChild(output);
}

function Attribcommand() {
    const output = document.createElement('div');
    output.innerHTML = `
        <p>A   H   I            C:\\Users\\acer\\NTUSER.DAT</p>
        <p>A  SH                C:\\Users\\acer\\ntuser.dat.LOG1</p>
        <p>A  SH                C:\\Users\\acer\\ntuser.dat.LOG2</p>
        <p>A  SH                C:\\Users\\acer\\NTUSER.DAT{95317787-bc2e-11ed-8fa0-f4c88a688606}.TM.blf</p>
        <p>A  SH                C:\\Users\\acer\\NTUSER.DAT{95317787-bc2e-11ed-8fa0-f4c88a688606}.TMContainer00000000000000000001.regtrans-ms</p>
        <p>A  SH                C:\\Users\\acer\\NTUSER.DAT{95317787-bc2e-11ed-8fa0-f4c88a688606}.TMContainer00000000000000000002.regtrans-ms</p>
        <p>   SH                C:\\Users\\acer\\ntuser.ini</p>
    `;
    commandLine.appendChild(output);
}

function breakCommand() {
    const output = document.createElement('p');
    output.textContent = 'C:\\Users\\acer>';
    commandLine.appendChild(output);
}

function displayTreeVideo() {
    const videoUrl = 'https://www.youtube.com/watch?v=FzRshPeH6YE';
    const width = 640;
    const height = 640;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const options = `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`;
    window.open(videoUrl, 'Video', options);
}

function chkdskcommand() {
    const output = document.createElement('p');
    output.textContent = "Access Denied as you do not have sufficient privileges or the disk may be locked by another process. You have to invoke this utility running in elevated mode and make sure the disk is unlocked.";
    commandLine.appendChild(output);
}
function compCommand(file1, file2) {
    const output = document.createElement('p');
    output.textContent = `The files file1.txt and file2.txt are identical.`;
    commandLine.appendChild(output);
}
function copyCommand(sourceFile, destinationFile) {
    const output = document.createElement('p');
    output.textContent = "file1.txt copied... file1(1).txt";
    commandLine.appendChild(output);
}

function delCommand(sourceFile, destinationFile) {
    const output = document.createElement('p');
    output.textContent = "file1.txt deleted...";
    commandLine.appendChild(output);
}
function eraseCommand(sourceFile, destinationFile) {
    const output = document.createElement('p');
    output.textContent = "file1.txt deleted...";
    commandLine.appendChild(output);
}

function findCommand() {
    const fileToFind = prompt('Enter the name of the file you want to find:');
    if (fileToFind) {
        findFile(fileToFind);
    } else {
        const output = document.createElement('p');
        output.textContent = 'No file name entered.';
        commandLine.appendChild(output);
    }
}

function findFile(file) {
    const path = `C:\\${file}`;

    const output = document.createElement('p');
    output.textContent = `${file} is located at ${path}`;
    commandLine.appendChild(output);
}

function eraseCommand(sourceFile, destinationFile) {
    const output = document.createElement('p');
    output.textContent = "file1.txt deleted...";
    commandLine.appendChild(output);
}

function formatCommand(fileOrFolder) {
    const confirmation = prompt(`Are you sure you want to format ${fileOrFolder}? (yes/no)`);

    if (confirmation && confirmation.toLowerCase() === 'yes') {
        const output = document.createElement('p');
        output.textContent = `file1.txt formatted.`;
        commandLine.appendChild(output);
    } else if (confirmation && confirmation.toLowerCase() === 'no') {

    } else {
        const output = document.createElement('p');
        output.textContent = 'Invalid response. Please enter yes or no.';
        commandLine.appendChild(output);
    }
}

function labelCommand() {
    const volumeLabel = prompt("Volume label (32 characters, ENTER for none)?");

    if (volumeLabel !== null) {
        if (volumeLabel.length <= 32) {
            const output = document.createElement('div');
            output.innerHTML = `
                <p>Volume in drive C: is Acer</p>
                <p>Volume Serial Number is 3C97-AAF6</p>
                <p>Volume label set to ${volumeLabel ? volumeLabel : 'Acer'}</p>
            `;
            commandLine.appendChild(output);
        } else {
            const output = document.createElement('p');
            output.textContent = 'Volume label should not exceed 32 characters.';
            commandLine.appendChild(output);
        }
    } else {
        const output = document.createElement('p');
        output.textContent = 'Volume label change cancelled.';
        commandLine.appendChild(output);
    }
}

function pathCommand() {
    const output = document.createElement('p');
    output.textContent = "You are in drive C:> ...";
    commandLine.appendChild(output);
}

function pauseCommand() {
    const output = document.createElement('p');
    output.textContent = 'Press any key to continue . . .';
    commandLine.appendChild(output);

    document.addEventListener('keydown', function(event) {
        commandLine.removeChild(output);
    });
}

function pushdCommand() {
    const output = document.createElement('p');
    output.textContent = "C:\Users\Student>";
    commandLine.appendChild(output);
}

function recoverCommand() {
    const fileName = prompt("Enter the file name to recover:");
    if (fileName) {
        const output = document.createElement('p');
        output.textContent = `File '${fileName}' is recovered.`;
        commandLine.appendChild(output);
    } else {
        const output = document.createElement('p');
        output.textContent = 'No file name entered. Recovery aborted.';
        commandLine.appendChild(output);
    }
}

function remCommand() {
    const output = document.createElement('p');
    output.textContent = "Records comments (remarks) in a batch file or CONFIG.SYS. REM [comment]";
    commandLine.appendChild(output);
}

function replaceCommand() {
    const fileName = prompt("Enter the file name to replace:");
    if (fileName) {
        const output = document.createElement('p');
        output.textContent = `File '${fileName}' is replaced.`;
        commandLine.appendChild(output);
    } else {
        const output = document.createElement('p');
        output.textContent = 'No file name entered. Recovery aborted.';
        commandLine.appendChild(output);
    }
}
function startCommand() {
    window.open(window.location.href, '_blank');
}

function volCommand() {
    const output = document.createElement('div');
    output.textContent = "Volume in drive C is Acer\nVolume Serial Number is 3C97-AAF6";
    commandLine.appendChild(output);
}




// Blink cursor
setInterval(function() {
    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500);

var start_port = 20000;
var end_port = 20050;

async function printConfig() {

    // common
    console.log("# frpc.ini");
    console.log("[common]");
    console.log("server_addr =");
    console.log("server_port =");
    console.log("token =");
    
    // tcp
    for (let i = start_port; i <= end_port; i++) {
        var port = i;
        var label = `[${i}_tcp]`;

        console.log(label)
        console.log("type = tcp")
        console.log("local_ip = 192.168.122.128")
        console.log("local_port = " + port)
        console.log("remote_port = " + port)
    }

    // udp
    for (let i = start_port; i <= end_port; i++) {
        var port = i;
        var label = `[${i}_udp]`;

        console.log(label)
        console.log("type = udp")
        console.log("local_ip = 192.168.122.128")
        console.log("local_port = " + port)
        console.log("remote_port = " + port)
    }
}

printConfig();
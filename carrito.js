
        // Aquí guardaremos los productos
        let carrito = [];
        let total = 0;

        // Función para agregar productos
        function agregarAlCarrito(nombre, precio) {
            carrito.push({ nombre: nombre, precio: precio });
            actualizarCarrito();
            abrirCarrito(); // Abre el panel automáticamente para que el cliente vea que se agregó
        }

        // Función para actualizar la lista visual y los totales
        function actualizarCarrito() {
            const lista = document.getElementById('lista-carrito');
            lista.innerHTML = ''; // Limpiamos la lista actual
            total = 0;

            if (carrito.length === 0) {
                lista.innerHTML = '<p style="color: #999; text-align: center; margin-top: 50px;">Tu lista está vacía.</p>';
            } else {
                // Recorremos los productos y los pintamos
                carrito.forEach((item, index) => {
                    total += item.precio;
                    lista.innerHTML += `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #f9f9f9;">
                            <div>
                                <h4 style="margin: 0; color: #333; font-size: 1rem;">${item.nombre}</h4>
                                <span style="color: #00c2cb; font-weight: 600;">$${item.precio} MXN</span>
                            </div>
                            <button onclick="eliminarDelCarrito(${index})" style="background: #ffe4e8; color: #ff91a4; border: none; border-radius: 5px; width: 30px; height: 30px; cursor: pointer; font-weight: bold;">X</button>
                        </div>
                    `;
                });
            }

            // Actualizamos los textos de los totales y el contador rojo
            document.getElementById('total-carrito').innerText = `$${total} MXN`;
            document.getElementById('contador-carrito').innerText = carrito.length;
        }

        // Función para eliminar un producto de la lista
        function eliminarDelCarrito(index) {
            carrito.splice(index, 1); // Quita el elemento del arreglo
            actualizarCarrito();
        }

        // Funciones para abrir y cerrar el panel lateral
        function abrirCarrito() {
            document.getElementById('carrito-sidebar').style.right = '0';
        }

        function cerrarCarrito() {
            document.getElementById('carrito-sidebar').style.right = '-400px';
        }

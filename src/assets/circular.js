{
  data() {
    return {
      isDragging: false,
      startAngle: 0,
      rotationAngle: 359,
      progressValue: 1, 
      isRestoring: false,
    }
  },
  computed: {
    tiempoRestante() {
      const gradosRestantes = 360 - this.rotationAngle;
      const segundos = Math.round(gradosRestantes / 6); 
      const minutos =  Math.round(segundos / 60);
      console.log(this.rotationAngle, this.progressValue)
      return segundos;
    },
  },
  methods: {
    getAngle(event) {
      const orbit7 = this.$refs.time_panel;
      const rect = orbit7.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = event.clientX || event.touches[0].clientX;
      const clientY = event.clientY || event.touches[0].clientY;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    },
    startDrag(event) {
      // Detener la restauración si está en curso
      if (this.isRestoring) {
        clearInterval(this.restoreInterval); // Limpiar el intervalo de restauración
        this.isRestoring = false; // Actualizar el estado
        let iconControl = this.$refs.icon_control;
        iconControl.setAttribute('d', 'M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z'); // Cambiar el icono a "play"
      }
    
      // Iniciar el arrastre
      this.isDragging = true;
      this.startAngle = Math.round(this.getAngle(event) - this.rotationAngle);
    
      // Agregar listeners para el arrastre
      window.addEventListener('mousemove', this.duringDrag);
      window.addEventListener('touchmove', this.duringDrag);
      window.addEventListener('mouseup', this.stopDrag);
      window.addEventListener('touchend', this.stopDrag);
    },
    duringDrag(event) {
      if (!this.isDragging) return;

      // Calculate the new rotation angle and round it to the nearest integer
      let angle = Math.round(this.getAngle(event) - this.startAngle);

      // Ensure the angle is always between 0 and 360
        this.rotationAngle = (angle % 360 + 360) % 360; // fluid
      //this.rotationAngle = ((Math.round(angle / 5) * 5) % 360 + 360) % 360;
          // Update the progress value based on the rotation angle
          this.progressValue = (360 - this.rotationAngle);
    
    },
    stopDrag() {
      this.isDragging = false;
      let iconControl = this.$refs.icon_control
      iconControl.setAttribute('d', 'M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z')
      // Remove event listeners
      window.removeEventListener('mousemove', this.duringDrag);
      window.removeEventListener('touchmove', this.duringDrag);
      window.removeEventListener('mouseup', this.stopDrag);
      window.removeEventListener('touchend', this.stopDrag);
    },
    toggleRestore(e) {
      let iconControl = this.$refs.icon_control;
      if (this.isRestoring) {
        // Pause restoration
        iconControl.setAttribute('d', 'M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z');
        clearInterval(this.restoreInterval);
        this.isRestoring = false;
      } else {
        // Start restoration
        this.startRestoration();
      } 
    },
    startRestoration() {
      let iconControl = this.$refs.icon_control;

      // Stop any existing animation
      if (this.restoreInterval) {
        clearInterval(this.restoreInterval);
      }

      // Calculate the delta angle and duration
      const deltaAngle = this.startAngle - this.rotationAngle;
      const duration = Math.abs(deltaAngle) * 1000; 

      // Calculate the step size and interval time
      const step = deltaAngle > 0 ? 1 : -1;
      const intervalTime = 1000 / 6 ;

     //const step = deltaAngle > 0 ? 5 : -5;
     //const intervalTime = 1000 ;

      // Start the animation
      this.isRestoring = true;
      this.restoreInterval = setInterval(() => {
        iconControl.setAttribute('d', 'M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z');

        if (this.rotationAngle !== 359 && this.isRestoring && this.progressValue !== 1) {
          this.rotationAngle -= step;
          this.rotationAngle = (this.rotationAngle % 360 + 360) % 360; 
          this.progressValue = 360 - this.rotationAngle; 
          
        } else {
          this.resetToZero()
        }
      }, intervalTime);

    },
    startLongPress() {
      // Start long press timer
      let iconControl = this.$refs.icon_control;
      this.longPressTimer = setTimeout(() => {
      // Limpiar el icono (no mostrar nada)
      iconControl.setAttribute('d', '');

        this.resetToZero('longpress');
      }, 1000); 
    },
    endLongPress() {
      // Limpiar el temporizador si no se completó el long press
      clearTimeout(this.longPressTimer);
      
    },
    resetToZero(value) {
      clearInterval(this.restoreInterval);
      this.isRestoring = false;
      this.rotationAngle = 359;
      this.progressValue = 1;
      
      // Actualizar el icono al estado de "play"
      let iconControl = this.$refs.icon_control;
      if (value) {
      } else {
        iconControl.setAttribute('d', '');

      }
    }

  }
}

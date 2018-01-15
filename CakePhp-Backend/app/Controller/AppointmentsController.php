<?php
// Controller/AppointmentsControllerController.php
class AppointmentsController extends AppController {    

    public $components = array('RequestHandler');

    public function index() {
        $appointments = $this->Appointment->find('all');
        $this->set(array(
            'appointments' => $appointments,
            '_serialize' => array('appointments')
        ));
    }

    public function view($id) {
        $appointments = $this->Appointment->findById($id);
        $this->set(array(
            'appointments' => $appointments,
            '_serialize' => array('appointments')
        ));
    }

    public function add() {
        $this->Appointment->create();
        if ($this->Appointment->save($this->request->data)) {
            $message = 'Saved';
        } else {
            $message = 'Error';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }

    public function edit($id) {
        $this->appointments->id = $id;
        if ($this->Recipe->save($this->request->data)) {
            $message = 'Saved';
        } else {
            $message = 'Error';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }

    public function delete($id) {
        if ($this->Appointment->delete($id)) {
            $message = 'Deleted';
        } else {
            $message = 'Error';
        }
        $this->set(array(
            'message' => $message,
            '_serialize' => array('message')
        ));
    }
}
?>
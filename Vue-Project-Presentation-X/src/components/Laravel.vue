<template>
  <div id="LARAVEL">
    <h1 id="laravel">This content is about the basics of Laravel</h1>
    <h2 id="controllers">Controllers:</h2>
    <hr>
    <p>
      The controllers handle the logic behind the function in <code>Route::get('/', function(){});</code>
    </p>
    <h4>Creating a controller</h4>
    <ol>
      <li><code>php artisan make:controller [name]</code></li>
    </ol>
    <h4>Using a controller</h4>
    <p><code>Route::get('/', 'controllerName@function');</code></p>
    <p>
  	  <code>function</code> is a public function inside the controller file that contains the logic that returns the view and fetches data from the database
    </p>
    <h5>Route Model Binding</h5>
    <p>
      it's not exclusive to controllers (I think), it's a way to fetch an specific object from a database through the URL
    </p>
<pre><code>
&lt;?php

namespace App\Http\Controllers;

use App\Task;

class TasksController extends Controller
{

  public function show(Task $task){ //Route model binding
    /*
      what happens here is that show() waits for a Task, the variable in the argument MUST
    possess the same name as the wildcard in the URL ('/tasks/{task}') for this to work,
    through Route Model Binding you can obtain a specific object with the id (primary key)
    given by the wildcard, it's the same as $task = Task::find($id); 
     */
    return view('tasks.show', compact('task')); //first argument could also be 'tasks/show' as well

  }
}
?&gt;</code>
</pre>
    <h2 id="databases">Creating a database:</h2>
    <hr>
    <ol>
      <li><code>mysql -uroot -p</code></li>
      <li><code>create database [name]</code></li>
    </ol>
    <h3 id="settingUp">Setting up a database for Laravel</h3>
    <ol>
      <li>rename .env.example to .env</li>
      <li>generate a key with php artisan key:generate</li>
      <li>set the database name DB_DATABASE=[name]</li>
      <li>set DB_USERNAME=root</li>
      <li>set DB_PASSWORD=[password]</li>
    </ol>
    <div class="message is-dark">
      <div class="message-header">A way to fill a database with Laravel</div>
      <div class="message-body">
        <ol>
          <li><code>php artisan tinker</code></li>
          <li>
            <code>$task = App\Task;<br>$task->body = 'hi';<br>$task->save();</code> //only works for first 2?
          </li>
        </ol>
      </div>
    </div>
    <h3 id="migrations">Migrations</h3>
    <p>they are the blueprint for the database tables</p>
    <h4>Making a migration table</h4>
    <ol>
      <li><code>php artisan make:migration [filename] --create=[title of table, basically]</code></li>
      <li>
        Example: <code>php artisan make:migration uhm --create=sales</code> //date_uhm.php migration file created with sales as a table
      </li>
      <li>convention: filename should be <code>create_[title of table]_table</code></li>
    </ol>
    <h4>Migrating to the database</h4>
    <ol>
      <li><code>php artisan migrate</code></li>
    </ol>
    <div class="message is-dark">
      <div class="message-header">Notes:</div>
      <div class="message-body">
        <ul>
          <li><code>php artisan migrate:refresh</code> drops all tables and looks for changes made to the migrations files and migrates the new tables</li>
          <li><code>php artisan migrate:fresh</code> drops all tables</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'laravel'
}
</script>
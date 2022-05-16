import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Hi from Blogs</h1>
      <h1>
        <strong className="text-primary">
          Question-01 :Difference between Javascript And Nodejs
        </strong>
        <p>
          Answer: Javascript is a programming language for web devolopemnt.On
          the other hand,Nodejs is a Javascript Runtime Environment.Javascript
          is mainly client side programming language.On the other hand,Nodejs is
          used on the server side.Javascript can easily manipulate Html and DOM
          elements.On the other hand,Nodejs caanot add Html tags and Manipulate
          DOM.Javascript is the updated version of ECMA Script .On the other
          hand,Nodejs is written in C,C++,Javascript.Javascript is
          high-level,light-weight and object oriented programming language that
          is used by every webdevolopers to create web pages,web
          applications,mobile applications and also used in game devolopement.On
          the other hand,Nodejs is a Javascript runtime environment built on
          Google V8 engine which is used to run javascript outside yhe browser{" "}
        </p>
      </h1>
      -------------------------------------------*--------------------------------------------
      <h1>
        <strong className="text-primary">
          Question-02: When you should use Nodejs and when you should use
          MongoDb?
        </strong>
        <p>
          Answer: Nodejs is an open source Javascript runtime environment.Due to
          its scalability nature,Nodejs is used in many startups.Nodejs has a
          high performance.It compiles with Javascript code directly into
          machine code.This makes it as a resource efficient .Nodejs has high
          community support.It is used by devolopers to make web application
          more efficient.Nodejs boots web devolopement speed.Yhe npm registery
          offers numerous solutions ,modules,libraries to create web apps by
          acquiring more values and investing in a less effort.This property
          directly influences the time to market.
          <p>
            On the other hand,MongoDb is a poular open source Nosql databse.We
            can perform CRUD(create,read,update,Delete) operations with
            Data.Besides yhis,MongoDb is very easy to scale up.Sothis is used by
            many organizations for performing data operations.Mongo db basically
            uses internal memory for storing the working temporary datasets and
            it is much faster.So for this reason it is used by organizatons to
            store datas.Mongodb can be used as a File Storage system
          </p>
        </p>
      </h1>
      <h1>
        <strong className="text-primary">
          {" "}
          Question-03 :Difference between Sql and Nosql Databases
        </strong>
        <p>
          Answer: SQL databases display data in form of tables,on the other
          hand,No sql database display data as key value pair,documents.Sql
          database are vertically scalable,No sql database are horizontally
          scalable.Sql databashierical datae has fixed schema,No sql database
          have dynamic schema.Sql database are not suited for hierical data
          storage,NoSql database are best suited for hierical data storage.
          Examples of Sql Database:MySql,Oracle,PostgreSql.Examples of Nosql
          databse are MongoDb,Cassendra
        </p>
      </h1>
      <h1>
        <strong className="text-primary">
          {" "}
          Question -04 :What is the purpose of Jwt ?and how does it works?
        </strong>

        <p>
          Answer: JWT stands for JSON Web Token.It is a way for securely
          transmitting information between parties as a JSON object.The shared
          information can be verified and be trusted because it is digitally
          signed.JWT can be signed using a secret algorithm.JWT is used for
          various purposes.Like Authorization,Information Exchange.In
          Authorization process,JWT is broadly used.Once the user is logged
          in,JWT allowing the user to access routes ,services and resources only
          when the Token is valid.Another purpose of JWT usuage is Information
          Exchange.JWT Tokens are good way for securely transmitting information
          between parties.Because,JWT CAN be signed using Public Private key
          pairs.As the signature is calculated usinf=g header and payload,we can
          verify that the whether yhe content is tampered or not.
        </p>
      </h1>
    </div>
  );
};

export default Blogs;
